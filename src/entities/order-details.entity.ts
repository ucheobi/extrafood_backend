import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Menu } from './menu.entity';
import { Order } from './order.entity';

@Entity({ name: 'orderdetails' })
@ObjectType()
export class OrderDetails {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column('double')
  @Field()
  total_amount: number;

  @OneToMany(() => Menu, (menu) => menu.order_details)
  @Field((type) => [Menu])
  menus: Menu[];

  @ManyToOne(() => Order, (order) => order.order_details)
  order: Order;
}
