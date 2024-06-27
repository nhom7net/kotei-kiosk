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

router.post('/edit', async (req, res) => {
  if (!req.body.id || !req.body.name) {
    res.status(400);
    return res.json({ message: 'Table ID is missing or name is not specified!!' });
  }

  try {
    const table = await DI.table.findOne({ id: req.body.id });
    if (!table) {
      res.status(400);
      return res.json({ message: 'Table not found!' });
    }

    table.display_name = req.body.name;
    await DI.em.flush();

    res.json(table);
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
});

router.post('/delete', async (req, res) => {
  if (!req.body.id) {
    res.status(400);
    return res.json({ message: 'Table ID is missing!!' });
  }

  try {
    const table = await DI.table.findOne({ id: req.body.id });
    if (!table) {
      res.status(400);
      return res.json({ message: 'Table not found!' });
    }

    await DI.table.nativeDelete(table);

    res.json(table);
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
})

export const TableController = router;
