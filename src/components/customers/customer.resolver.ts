import { Query, Resolver } from '@nestjs/graphql';
import { CustomerService } from './customer.service';

@Resolver()
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query(() => String)
  public async makeOrders() {
    return 'Hello from my kitchen';
  }
}
