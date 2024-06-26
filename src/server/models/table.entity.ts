import { Entity, OneToOne, Property, type Rel } from '@mikro-orm/core';
import { Orders } from './order.entity.js';
import { BaseEntity } from './base.entity.js';

@Entity()
export class Table extends BaseEntity {
  @Property()
  display_name!: string;

  @Property()
  status!: boolean;

  @OneToOne({ nullable: true })
  order!: Rel<Orders>;
}
