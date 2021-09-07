import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AccountType } from './enums';
import { Order } from './order.entity';

@Entity({ name: 'user' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

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
    default: AccountType.EMPLOYEE,
  })
  @Field()
  account_type: AccountType;

  @OneToMany(() => Order, (order) => order.processed_by)
  @Field((type) => [Order])
  orders: Order[];
}
