import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class OrderInput {
  @Field()
  order_date: Date;

  @Field(() => Float)
  total_amount: number;

  @Field()
  info: string;
}
