import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Table } from './table.entity';

@Entity()
export class Orders {
    @PrimaryKey()
    id!: number

    @Property()
    table!: number

    @Property()
    startTime!: Date
}