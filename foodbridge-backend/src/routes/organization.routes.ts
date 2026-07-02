import { Router } from 'express';
import * as organizationController from '../controllers/organization.controller';

const router = Router();

// GET /api/v1/organizations
router.get('/', organizationController.getOrganizations);

// GET /api/v1/organizations/:id
router.get('/:id', organizationController.getOrganizationById);

export default router;
