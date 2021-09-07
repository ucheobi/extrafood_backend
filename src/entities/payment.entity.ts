import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
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
  @Field()
  id: number;

  @Column()
  @Field()
  @UpdateDateColumn()
  processed_date: Date;

  @Column('double')
  @Field()
  amount: number;

  @ManyToOne((type) => Order)
  @JoinColumn()
  order: Order;

  @ManyToOne((type) => User)
  @Field((type) => User)
  processed_by: User;
}
