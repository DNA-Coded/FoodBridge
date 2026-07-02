import { Request, Response, NextFunction } from 'express';
import * as donationService from '../services/donation.service';
import { sendResponse } from '../utils/response.util';

export const getDonations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const donations = await donationService.getAllDonations();
    return sendResponse(res, 200, donations, 'Donations retrieved successfully');
  } catch (error) {
    next(error);
  }
};

export const getDonationById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const donation = await donationService.getDonationById(id);
    if (!donation) {
      return res.status(404).json({ success: false, error: 'Donation not found' });
    }
    return sendResponse(res, 200, donation, 'Donation retrieved successfully');
  } catch (error) {
    next(error);
  }
};

export const createDonation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const newDonation = await donationService.createDonation(data);
    return sendResponse(res, 201, newDonation, 'Donation created successfully');
  } catch (error) {
    next(error);
  }
};
