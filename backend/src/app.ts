import express from 'express';

import { userRoutes } from './routes/user.routes';

import { setupDotenv } from './config';
setupDotenv();

const app = express();

app.use(express.json());
app.use(userRoutes);

export { app };