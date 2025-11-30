import { Router } from 'express';
import { signIn, signUp } from '../controllers/auth.controller.js';

const authRouter = Router();

// Path: /app/v1/auth/* (POST)
authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);

export default authRouter;
