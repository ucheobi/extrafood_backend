import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderInput } from 'src/dto/inputs/order.input';
import { Order } from 'src/entities/order.entity';
import { OrderService } from './orders.service';

@Resolver()
export class OrderResolver {
  constructor(private ordersService: OrderService) {}

  @Query(() => [Order])
  public async orders(): Promise<Order[]> {
    return await this.ordersService.getAllOrders().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Order)
  public async createOrder(
    @Args('newOrder') newOrder: OrderInput,
  ): Promise<Order> {
    return await this.ordersService.makeOrder(newOrder).catch((err) => {
      throw err;
    });
  }
}
