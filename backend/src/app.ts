import express from 'express';

import { userRoutes } from './routes/user.routes';

import { setupDotenv } from './config';
import { authRoutes } from './routes/auth.routes';
setupDotenv();

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(authRoutes)

export { app };