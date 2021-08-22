import { Module } from '@nestjs/common';
import { CustomerModule } from './customers/customer.module';
import { MenuModule } from './menus/menu.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { OrderModule } from './orders/orders.module';
import { PaymentModule } from './payments/payment.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    OrderModule,
    MenuModule,
    CustomerModule,
    UserModule,
    OrderDetailsModule,
    PaymentModule,
  ],
})
export class ComponentsModule {}
