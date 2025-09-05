import express, { Request, Response } from "express";
import cors from "cors";
import pino from 'pino';
import rateLimit from 'express-rate-limit';
import profileRoutes from './routes/profile';
import projectRoutes from './routes/projects';
import skillRoutes from './routes/skills';
import searchRoutes from './routes/search';
import workRoutes from './routes/work';

const app = express();
const logger = pino();

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || '*' }));
app.use(rateLimit({ windowMs: 60 * 1000, max: 60 }));

// Health check
app.get('/health', (_req: Request, res: Response) => res.sendStatus(200));

// Example test route
app.get("/profile", async (_req: Request, res: Response) => {
  res.json({ message: "Profile endpoint works!" });
});

// Attach routes
app.use('/profile', profileRoutes);
app.use('/projects', projectRoutes);
app.use('/skills', skillRoutes);
app.use('/search', searchRoutes);
app.use('/work', workRoutes);

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => logger.info(`Backend running on http://localhost:${port}`));
