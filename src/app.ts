import express from 'express';
import cors from 'cors';
import { auth } from './lib/auth';
import { toNodeHandler } from 'better-auth/node';
import config from './config';

const app = express();

app.use(cors({
    origin: config.APP_URL || "http://localhost:3000", // client side url
    credentials: true
}))

app.use(express.json());

app.all("/api/auth/*splat", toNodeHandler(auth));
export default app;