import { Entity, OneToOne, Property, type Rel } from '@mikro-orm/core';
import { Orders } from './order.entity.js';
import { Menu } from './menu.entity.js';
import { BaseEntity } from './base.entity.js';

@Entity()
export class OrderItems extends BaseEntity {
    @OneToOne()
    order!: Rel<Orders>

    @OneToOne()
    menu!: Rel<Menu>

    @Property()
    quantity!: number
}