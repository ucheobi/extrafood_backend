import { menuType } from 'src/entities/enums';

export interface IMenu {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  menu_type?: menuType;
}
