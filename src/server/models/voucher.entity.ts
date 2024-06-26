import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Vouchers {
    @PrimaryKey()
    id!: number

    @Property()
    code!: string

    @Property()
    displayName!: string

    @Property()
    amount!: number
}