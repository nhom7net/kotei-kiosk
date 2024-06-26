import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Orders } from './order.entity';
import { Menu } from './menu.entity';

@Entity()
export class OrderItems {
    @PrimaryKey()
    id!: number

    @Property()
    orderId!: number

    @Property()
    menuId!: number

    @Property()
    quantity!: number
}