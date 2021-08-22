import { OrderDetails } from 'src/entities/order-details.entity';

export interface IOrder {
  id?: number;
  order_date?: Date;
  total_amount?: number;
  info?: string;
  order_details?: OrderDetails[];
}
