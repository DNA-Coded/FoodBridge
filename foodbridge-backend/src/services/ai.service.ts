import { GoogleGenAI } from '@google/genai';
import {
  buildFoodAnalysisUserPrompt,
  buildOrgMatchingUserPrompt,
  buildNotificationUserPrompt,
} from '../utils/prompt.builder';
import { parseJsonFromGemma } from '../utils/response.parser';

// ─── Client (singleton) ───────────────────────────────────────────────────────
let _client: GoogleGenAI | null = null;

function getClient(): GoogleGenAI {
  if (!_client) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('GEMINI_API_KEY is not set in environment variables.');
    _client = new GoogleGenAI({ apiKey });
  }
  return _client;
}

const MODEL = process.env.GEMMA_MODEL || 'gemma-4-26b-a4b-it';

/**
 * Robustly extract text from a @google/genai response.
 * Gemma 4 is a thinking model — parts with thought=true are reasoning traces.
 * We skip those and use only the final response parts.
 */
function extractText(response: any): string {
  try {
    const parts: any[] = response?.candidates?.[0]?.content?.parts ?? [];
    if (parts.length > 0) {
      const responseParts = parts.filter((p: any) => !p.thought);
      const thoughtCount = parts.length - responseParts.length;
      if (thoughtCount > 0) {
        console.log(`[Gemma4] Skipped ${thoughtCount} thinking part(s)`);
      }
      const text = responseParts.map((p: any) => p.text ?? '').join('').trim();
      if (text.length > 0) return text;
      // If all parts are thought, use everything (model might not mark thoughts)
      const allText = parts.map((p: any) => p.text ?? '').join('').trim();
      if (allText.length > 0) return allText;
    }
  } catch (_) {}

  if (typeof response?.text === 'string' && response.text.trim().length > 0) {
    return response.text;
  }

  console.error('[Gemma4] Cannot extract text. Candidates:', JSON.stringify(response?.candidates ?? []).slice(0, 800));
  return '';
}

/** Shared generateContent wrapper with proper role-based message format */
async function generate(userPrompt: string, cfg: { temperature: number; maxOutputTokens: number }): Promise<string> {
  const client = getClient();
  const response = await client.models.generateContent({
    model: MODEL,
    contents: [
      // Gemma 4 doesn't support systemInstruction — embed context in the user turn
      { role: 'user', parts: [{ text: userPrompt }] },
    ],
    config: {
      temperature: cfg.temperature,
      // 4096 gives enough room for thinking tokens + JSON response
      maxOutputTokens: 4096,
    },
  });
  const text = extractText(response);
  console.log(`[Gemma4 / ${MODEL}] Response (${text.length} chars):`, text.slice(0, 600));
  return text;
}

// ─── 1. Food Analysis ─────────────────────────────────────────────────────────
export interface FoodAnalysisResult {
  summary: string;
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
  estimatedServings: number;
  recommendedCategories: string[];
  safeToConsume: boolean;
  storageAdvice: string;
  analysedAt: string;
}

export const analyseDonation = async (donation: {
  name: string;
  category: string;
  quantity: string;
  description?: string;
  cookedAt?: string;
}): Promise<FoodAnalysisResult> => {
  const userPrompt = buildFoodAnalysisUserPrompt(donation);
  const rawText = await generate(userPrompt, { temperature: 0.2, maxOutputTokens: 512 });
  const parsed = parseJsonFromGemma<FoodAnalysisResult>(rawText);
  return { ...parsed, analysedAt: new Date().toISOString() };
};

// ─── 2. Organization Matching ─────────────────────────────────────────────────
export interface OrgMatch {
  organizationId: string;
  organizationName: string;
  score: number;
  explanation: string;
  distanceKm?: number;
}

export interface MatchResult {
  matches: OrgMatch[];
  topMatch: OrgMatch;
  reasoningSummary: string;
}

export const matchDonationToOrgs = async (
  donation: { name: string; category: string; quantity: string; urgencyLevel: string },
  organizations: Array<{ id: string; name: string; type: string; city: string; acceptedFoodTypes: string[]; capacity: number }>
): Promise<MatchResult> => {
  const userPrompt = buildOrgMatchingUserPrompt(donation, organizations);
  const rawText = await generate(userPrompt, { temperature: 0.1, maxOutputTokens: 768 });
  return parseJsonFromGemma<MatchResult>(rawText);
};

// ─── 3. Multilingual Notification ─────────────────────────────────────────────
export interface NotificationResult {
  language: string;
  subject: string;
  message: string;
  smsVersion: string;
}

export const generatePickupNotification = async (
  donation: { name: string; quantity: string; pickupWindow: string; address: string },
  organization: { name: string; contactName?: string },
  language: 'english' | 'bengali' | 'hindi'
): Promise<NotificationResult> => {
  const userPrompt = buildNotificationUserPrompt(donation, organization, language);
  const rawText = await generate(userPrompt, { temperature: 0.4, maxOutputTokens: 512 });
  const parsed = parseJsonFromGemma<NotificationResult>(rawText);
  return { ...parsed, language };
};
