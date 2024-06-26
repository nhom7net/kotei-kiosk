// @ts-nocheck
import { Router } from 'express';
import { DI } from '../apiService';
import { QueryOrder } from '@mikro-orm/core';

const router = Router();

router.get('/', async (req, res) => {
  const tables = await DI.table.findAll({
    orderBy: { display_name: QueryOrder.DESC },
  });
  res.json(tables);
});

router.post('/create', async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    return res.json({ message: 'Need table display name!' });
  }

  try {
    const table = DI.table.create({
      display_name: req.body.name,
      status: true,
      order: null,
    });
    await DI.em.flush();

    res.json(table);
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
});

export const TableController = router;
