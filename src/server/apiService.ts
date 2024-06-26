// @ts-nocheck
import http from 'http';
import express from 'express';
import { EntityManager, EntityRepository, MikroORM } from '@mikro-orm/core';
import { RequestContext } from '@mikro-orm/core';
import { Menu } from './models/menu.entity.js';
import { Orders } from './models/order.entity.js';
import { OrderItems } from './models/orderitem.entity.js';
import { Table } from './models/table.entity.js';
import { Vouchers } from './models/voucher.entity.js';
import { TableController } from './controllers/table.controller.js';

export const DI = {} as {
  server: http.Server;
  orm: MikroORM;
  em: EntityManager;

  // models
  menu: EntityRepository<Menu>;
  voucher: EntityRepository<Vouchers>;
  order: EntityRepository<Orders>;
  orderItem: EntityRepository<OrderItems>;
  table: EntityRepository<Table>;
};

export const apiService = express();
const port = 6900;

export const init = async () => {
  DI.orm = await MikroORM.init();
  DI.em = DI.orm.em;

  // model setup
  DI.menu  = DI.em.getRepository(Menu);
  DI.voucher = DI.em.getRepository(Vouchers);
  DI.order = DI.em.getRepository(Orders);
  DI.orderItem = DI.em.getRepository(OrderItems);
  DI.table = DI.em.getRepository(Table);

  apiService.use(express.json());
  apiService.use((req, res, next) => RequestContext.create(DI.orm.em, next));
  apiService.get('/', (req, res) =>
    res.json({
      message:
        'Kotei API service is live! See apiService.ts for API documentation.',
    })
  );

  apiService.use('/table', TableController);

  apiService.use((req, res) =>
    res.status(404).json({
      message: 'Invaild endpoint. You might want to check your spellings.',
    })
  );

  DI.server = apiService.listen(port, () => {
    console.log(`Kotei API service is live at http://localhost:${port}!!`);
  });
};

init();