import { AccountType } from 'src/entities/enums';
import { Order } from 'src/entities/order.entity';

export interface IUser {
  id?: number;
  name?: string;
  email?: string;
  password_hash?: string;
  contact_address?: string;
  phone_number?: number;
  role?: AccountType;
  orders?: Order[];
}
