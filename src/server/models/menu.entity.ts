import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Menu {
    @PrimaryKey()
    id!: number

    @Property()
    name!: string

    @Property()
    price!: number
}