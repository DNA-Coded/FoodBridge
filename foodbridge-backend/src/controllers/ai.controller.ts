import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import {
  analyseDonation,
  matchDonationToOrgs,
  generatePickupNotification,
} from '../services/ai.service';
import { sendResponse } from '../utils/response.util';
import Organization from '../models/Organization';

// ─── Schemas ─────────────────────────────────────────────────────────────────
const AnalyseSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  quantity: z.string().min(1),
  description: z.string().optional(),
  cookedAt: z.string().optional(),
  imageBase64: z.string().optional(),
});

const MatchSchema = z.object({
  donationId: z.string().optional(),
  name: z.string().min(1),
  category: z.string().min(1),
  quantity: z.string().min(1),
  urgencyLevel: z.enum(['low', 'medium', 'high', 'critical']),
  city: z.string().default('Kolkata'),
});

const NotifySchema = z.object({
  donation: z.object({
    name: z.string(),
    quantity: z.string(),
    pickupWindow: z.string(),
    address: z.string(),
  }),
  organization: z.object({
    name: z.string(),
    contactName: z.string().optional(),
  }),
  language: z.enum(['english', 'bengali', 'hindi']).default('english'),
});

// ─── Controllers ──────────────────────────────────────────────────────────────

/**
 * POST /api/v1/ai/analyse
 * Run Gemma 4 analysis on a donated food item.
 */
export const analyseFood = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = AnalyseSchema.parse(req.body);
    const result = await analyseDonation(body);
    return sendResponse(res, 200, result, 'Food analysis complete');
  } catch (err) {
    next(err);
  }
};

/**
 * POST /api/v1/ai/match
 * Match a donation to the best available organizations using Gemma 4.
 */
export const matchOrganizations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = MatchSchema.parse(req.body);

    // Fetch verified organizations from DB (optionally filter by city)
    const orgs = await Organization.find({ isVerified: true }).lean();
    const orgList = orgs.map(o => ({
      id: (o._id as any).toString(),
      name: o.name,
      type: o.type,
      city: o.location.city,
      acceptedFoodTypes: o.acceptedFoodTypes,
      capacity: o.capacity,
    }));

    const result = await matchDonationToOrgs(
      { name: body.name, category: body.category, quantity: body.quantity, urgencyLevel: body.urgencyLevel },
      orgList
    );
    return sendResponse(res, 200, result, 'Organization matching complete');
  } catch (err) {
    next(err);
  }
};

/**
 * POST /api/v1/ai/notify
 * Generate a multilingual pickup notification using Gemma 4.
 */
export const generateNotification = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = NotifySchema.parse(req.body);
    const result = await generatePickupNotification(
      body.donation,
      body.organization,
      body.language
    );
    return sendResponse(res, 200, result, 'Notification generated');
  } catch (err) {
    next(err);
  }
};

/**
 * GET /api/v1/ai/status
 * Check if the AI service is configured and ready.
 */
export const checkAiStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const hasKey = !!process.env.GEMINI_API_KEY;
    const model = process.env.GEMMA_MODEL || 'gemma-3-27b-it';
    const msg = hasKey ? 'AI service is ready' : 'GEMINI_API_KEY not set';
    return sendResponse(res, 200, {
      ready: hasKey,
      model,
      features: ['food-analysis', 'org-matching', 'multilingual-notifications'],
    }, msg);
  } catch (err) {
    next(err);
  }
};
