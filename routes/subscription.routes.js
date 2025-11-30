import { Router } from 'express';
import authorize from '../middlewares/auth.middleware.js';
import {
  createSubcription,
  getSubscription,
  getSubscriptions,
  getUsersSubscription,
} from '../controllers/subscription.controller.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', getSubscriptions);

subscriptionRouter.get('/:id', getSubscription);

subscriptionRouter.post('/', authorize, createSubcription);

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subcription' }));

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subcription' }));

subscriptionRouter.get('/user/:id', authorize, getUsersSubscription);

subscriptionRouter.get('/upcoming-renewals', (req, res) =>
  res.send({ title: 'GET upcoming renewals' }),
);

export default subscriptionRouter;
