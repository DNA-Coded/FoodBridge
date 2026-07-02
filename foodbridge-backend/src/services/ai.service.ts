import { GoogleGenAI } from '@google/genai';
import {
  buildFoodAnalysisPrompt,
  buildOrgMatchingPrompt,
  buildNotificationPrompt,
} from '../utils/prompt.builder';
import { parseJsonFromGemma } from '../utils/response.parser';

// ─── Client (singleton) ───────────────────────────────────────────────────────
let _client: GoogleGenAI | null = null;

function getClient(): GoogleGenAI {
  if (!_client) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not set in environment variables.');
    }
    _client = new GoogleGenAI({ apiKey });
  }
  return _client;
}

const MODEL = process.env.GEMMA_MODEL || 'gemma-3-27b-it';

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
  const client = getClient();
  const prompt = buildFoodAnalysisPrompt(donation);

  const response = await client.models.generateContent({
    model: MODEL,
    contents: prompt,
    config: {
      temperature: 0.2,   // low temp for factual analysis
      maxOutputTokens: 512,
    },
  });

  const text = response.text ?? '';
  const parsed = parseJsonFromGemma<FoodAnalysisResult>(text);
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
  const client = getClient();
  const prompt = buildOrgMatchingPrompt(donation, organizations);

  const response = await client.models.generateContent({
    model: MODEL,
    contents: prompt,
    config: {
      temperature: 0.1,
      maxOutputTokens: 768,
    },
  });

  const text = response.text ?? '';
  const parsed = parseJsonFromGemma<MatchResult>(text);
  return parsed;
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
  const client = getClient();
  const prompt = buildNotificationPrompt(donation, organization, language);

  const response = await client.models.generateContent({
    model: MODEL,
    contents: prompt,
    config: {
      temperature: 0.4,
      maxOutputTokens: 512,
    },
  });

  const text = response.text ?? '';
  const parsed = parseJsonFromGemma<NotificationResult>(text);
  return { ...parsed, language };
};
