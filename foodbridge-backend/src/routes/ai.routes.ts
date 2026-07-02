import { Router } from 'express';
import {
  analyseFood,
  matchOrganizations,
  generateNotification,
  checkAiStatus,
} from '../controllers/ai.controller';

const router = Router();

// GET  /api/v1/ai/status   — health check for AI service
router.get('/status', checkAiStatus);

// POST /api/v1/ai/analyse  — Gemma 4 food analysis
router.post('/analyse', analyseFood);

// POST /api/v1/ai/match    — Gemma 4 org matching
router.post('/match', matchOrganizations);

// POST /api/v1/ai/notify   — Gemma 4 multilingual notification
router.post('/notify', generateNotification);

export default router;
