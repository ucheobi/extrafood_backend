import { Menu } from 'src/entities/menu.entity';

export interface IOrderDetails {
  id?: number;
  total_amount?: number;
  menus?: Menu[];
}
