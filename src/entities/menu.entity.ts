import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { menuType } from './enums';
import { OrderDetails } from './order-details.entity';

@Entity({ name: 'menu' })
@ObjectType()
export class Menu {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column('double')
  @Field()
  price: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  image?: string;

  @Column({
    type: 'enum',
    enum: menuType,
    default: menuType.BURGER,
  })
  @Field()
  menu_type: menuType;

  @ManyToOne(() => OrderDetails, (order_detail) => order_detail.menus)
  order_details: OrderDetails;
}
