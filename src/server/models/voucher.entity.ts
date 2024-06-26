import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity.js';

@Entity()
export class Vouchers extends BaseEntity{
    @Property()
    code!: string

    @Property()
    displayName!: string

    @Property()
    amount!: number
}