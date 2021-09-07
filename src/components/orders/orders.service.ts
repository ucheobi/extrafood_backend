import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderInput } from 'src/dto/inputs/order.input';
import { Repository } from 'typeorm';
import { Order } from '../../entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  public async getAllOrders(): Promise<Order[]> {
    return await this.orderRepository.find({}).catch((err) => {
      throw new Error('There is a problem fetching data from the server');
    });
  }

  public async makeOrder(newOrderData: OrderInput): Promise<Order> {
    const newOrder = this.orderRepository.create(newOrderData);
    await this.orderRepository.save(newOrder).catch((err) => {
      new InternalServerErrorException();
    });

    return newOrder;
  }
}
