import { Query, Resolver } from '@nestjs/graphql';
import { OrderService } from './orders.service';

@Resolver()
export class OrderResolver {
  constructor(private ordersService: OrderService) {}

  @Query(() => String)
  public async orders() {
    return 'Hello from my kitchen';
  }
}
