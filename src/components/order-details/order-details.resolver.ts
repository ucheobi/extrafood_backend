import { Query, Resolver } from '@nestjs/graphql';
import { OrderDetailsService } from './order-details.service';

@Resolver()
export class OrderDetailsResolver {
  constructor(private orderDetailsService: OrderDetailsService) {}

  @Query(() => String)
  public async orderDetails() {
    return 'Hello from Order details Module';
  }
}
