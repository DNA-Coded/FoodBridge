import { Router } from 'express';
import * as donationController from '../controllers/donation.controller';
import { validateRequest } from '../middlewares/validation.middleware';
import { createDonationSchema } from '../schemas/donation.schema';

const router = Router();

// GET /api/v1/donations
router.get('/', donationController.getDonations);

// GET /api/v1/donations/:id
router.get('/:id', donationController.getDonationById);

// POST /api/v1/donations
router.post('/', validateRequest(createDonationSchema), donationController.createDonation);

export default router;
