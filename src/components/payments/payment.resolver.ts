import { Query, Resolver } from '@nestjs/graphql';
import { PaymentService } from './payment.service';

@Resolver()
export class PaymentResolver {
  constructor(private paymentService: PaymentService) {}

  @Query(() => String)
  public async payments() {
    return 'Hello from my payment module';
  }
}
