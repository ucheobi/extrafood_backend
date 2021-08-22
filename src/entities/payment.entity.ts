import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { User } from './user.entity';

@Entity({ name: 'payment' })
@ObjectType()
export class Payment {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  @UpdateDateColumn()
  processed_date: Date;

  @Column()
  @Field()
  amount: number;

  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => User, (user) => user.orders)
  processed_by: User;
}
