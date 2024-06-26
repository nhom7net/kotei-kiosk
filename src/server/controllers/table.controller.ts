// @ts-nocheck
import { Router } from 'express';
import { DI } from '../apiService';
import { QueryOrder } from '@mikro-orm/core';

const router = Router();

router.get('/', (req, res) => {
  const tables = DI.table.findAll({
    orderBy: { display_name: QueryOrder.DESC },
  });
  res.json(tables);
});

router.get('/:id', async (req, res) => {
  try {
    const author = await DI.authors.findOneOrFail(req.params.id, {
      populate: ['books'],
    });

    res.json(author);
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
});

router.post('/', async (req, res) => {
  if (!req.body.name || !req.body.email) {
    res.status(400);
    return res.json({ message: 'One of `name, email` is missing' });
  }

  try {
    const author = DI.authors.create(req.body);
    await DI.em.flush();

    res.json(author);
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const author = await DI.authors.findOneOrFail(req.params.id);
    wrap(author).assign(req.body);
    await DI.em.flush();

    res.json(author);
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
});

export const TableController = router;
