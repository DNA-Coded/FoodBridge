import { Request, Response, NextFunction } from 'express';
import * as organizationService from '../services/organization.service';
import { sendResponse } from '../utils/response.util';

export const getOrganizations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const organizations = await organizationService.getAllOrganizations();
    return sendResponse(res, 200, organizations, 'Organizations retrieved successfully');
  } catch (error) {
    next(error);
  }
};

export const getOrganizationById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const organization = await organizationService.getOrganizationById(id);
    if (!organization) {
      return res.status(404).json({ success: false, error: 'Organization not found' });
    }
    return sendResponse(res, 200, organization, 'Organization retrieved successfully');
  } catch (error) {
    next(error);
  }
};
