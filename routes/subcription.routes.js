import { Router } from 'express';

const subcriptionRouter = Router();

subcriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subcriptions' }));

subcriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subcription details' }));

subcriptionRouter.post('/', (req, res) => res.send({ title: 'POST subcription' }));

subcriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subcription' }));

subcriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subcription' }));

subcriptionRouter.get('/user/:id', (req, res) => res.send({ title: 'GET all user subcriptions' }));

subcriptionRouter.get('/upcoming-renewals', (req, res) =>
  res.send({ title: 'GET upcoming renewals' }),
);

export default subcriptionRouter;
