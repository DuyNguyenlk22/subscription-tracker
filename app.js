import express from 'express';
import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subcriptionRouter from './routes/subcription.routes.js';

const app = express();

app.use('/app/v1/user', userRouter);
app.use('/app/v1/auth', authRouter);
app.use('/app/v1/subcription', subcriptionRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Subcription Tracker API !');
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});

export default app;
