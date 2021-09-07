import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AccountType } from './enums';
import { Order } from './order.entity';

@Entity({ name: 'customer' })
@ObjectType()
export class Customer {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password_hash: string;

  @Column()
  @Field()
  contact_address: string;

  @Column()
  @Field()
  phone_number: number;

  @Column({
    type: 'enum',
    enum: AccountType,
    default: AccountType.CUSTOMER,
  })
  account_type: AccountType;

  @OneToMany(() => Order, (order) => order.customer)
  @Field((type) => [Order], { nullable: true })
  order: Order[];
}
