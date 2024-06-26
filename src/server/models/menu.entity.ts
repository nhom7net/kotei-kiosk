import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity.js';

@Entity()
export class Menu extends BaseEntity {
    @Property()
    name!: string

    @Property()
    price!: number
}