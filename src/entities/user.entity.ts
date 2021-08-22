import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AccountType } from './enums';
import { Order } from './order.entity';

@Entity({ name: 'user' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
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

  account_type: AccountType;

  @OneToMany(() => Order, (order) => order.processed_by)
  orders: Order[];
}
