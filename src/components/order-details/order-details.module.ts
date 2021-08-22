import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetails } from 'src/entities/order-details.entity';
import { OrderDetailsResolver } from './order-details.resolver';
import { OrderDetailsService } from './order-details.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetails])],
  providers: [OrderDetailsService, OrderDetailsResolver],
  exports: [OrderDetailsService],
})
export class OrderDetailsModule {}
