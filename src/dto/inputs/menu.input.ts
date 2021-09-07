import { Field, Float, InputType } from '@nestjs/graphql';
import { menuType } from 'src/entities/enums';

@InputType()
export class MenuInput {
  @Field()
  name?: string;

  @Field()
  description?: string;

  @Field(() => Float)
  price?: number;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  menu_type?: menuType;
}
