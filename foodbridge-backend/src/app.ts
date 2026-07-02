import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/error.middleware';
import donationRoutes from './routes/donation.routes';
import organizationRoutes from './routes/organization.routes';
import aiRoutes from './routes/ai.routes';

const app: Application = express();

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/v1/donations', donationRoutes);
app.use('/api/v1/organizations', organizationRoutes);
app.use('/api/v1/ai', aiRoutes);

// 404 Handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

// Global Error Handler
app.use(errorHandler);

export default app;
