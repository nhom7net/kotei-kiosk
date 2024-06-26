import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Orders } from './order.entity';

@Entity()
export class Table {
    @PrimaryKey()
    id!: number

    @Property()
    display_name!: string

    @Property()
    status!: boolean

    @Property()
    orderId!: number
}