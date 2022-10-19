import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { userRoutes } from './routes/user.routes';
import { postRoutes } from './routes/post.routes';
import { authRoutes } from './routes/auth.routes';

import { verifyDatabase } from './middlewares/verifyDatabase';

const app = express();
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:3001',
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(verifyDatabase);

app.use(userRoutes);
app.use(postRoutes);
app.use(authRoutes)

export { app };