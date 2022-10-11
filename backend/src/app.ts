import express from 'express';
import cors from 'cors';

import { userRoutes } from './routes/user.routes';

import { setupDotenv } from './config';
import { authRoutes } from './routes/auth.routes';
setupDotenv();

const app = express();
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(userRoutes);
app.use(authRoutes)

export { app };