import { Entity, OneToOne, Property, type Rel } from '@mikro-orm/core';
import { Table } from './table.entity.js';
import { BaseEntity } from './base.entity.js';

@Entity()
export class Orders extends BaseEntity {
    @OneToOne()
    table!: Rel<Table>

    @Property()
    startTime!: Date
}