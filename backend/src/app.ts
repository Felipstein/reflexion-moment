import express from 'express';
import cors from 'cors';

import { userRoutes } from './routes/user.routes';

import { setupDotenv } from './config';
import { authRoutes } from './routes/auth.routes';
import { verifyDatabase } from './middlewares/verifyDatabase';
setupDotenv();

const app = express();
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3000',
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(verifyDatabase);
app.use(userRoutes);
app.use(authRoutes)

export { app };