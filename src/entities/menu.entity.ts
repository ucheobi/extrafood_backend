import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { menuType } from './enums';
import { OrderDetails } from './order-details.entity';

@Entity({ name: 'menu' })
@ObjectType()
export class Menu {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  price: number;

  @Column()
  @Field()
  image: string;

  @Column('int')
  menu_type: menuType;

  @ManyToOne(() => OrderDetails, (order_detail) => order_detail.menus)
  order_details: OrderDetails;
}
