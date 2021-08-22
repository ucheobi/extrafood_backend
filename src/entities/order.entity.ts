import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from './customer.entity';
import { OrderDetails } from './order-details.entity';
import { User } from './user.entity';

@Entity({ name: 'orders' })
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  @UpdateDateColumn()
  order_date: Date;

  @Column()
  @Field()
  total_amount: number;

  @Column()
  @Field()
  info: string;

  @ManyToOne(() => User, (user) => user.orders)
  processed_by: User;

  @OneToMany(() => OrderDetails, (order_details) => order_details.order)
  order_details: OrderDetails[];

  @ManyToOne(() => Customer, (customer) => customer.order)
  customer: Customer;
}
