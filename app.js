import express from 'express';
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subcriptionRouter from './routes/subcription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(errorMiddleware);

app.use('/app/v1/user', userRouter);
app.use('/app/v1/auth', authRouter);
app.use('/app/v1/subcription', subcriptionRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Subcription Tracker API !');
});

app.listen(PORT, async () => {
  console.log(`Example app listening on PORT ${PORT}`);

  await connectToDatabase();
});

export default app;
