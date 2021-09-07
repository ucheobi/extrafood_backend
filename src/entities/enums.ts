import { registerEnumType } from '@nestjs/graphql';

export enum BurgerSize {
  SMALL,
  LARGE,
}

export enum AccountType {
  CUSTOMER = 'customer',
  EMPLOYEE = 'employee',
  ADMIN = 'admin',
}

export enum menuType {
  BURGER = 'burger',
  SALAD = 'salad',
  VEGETABLE_RICE = 'vegetable rice',
}

registerEnumType(BurgerSize, {
  name: 'BurgerSize',
});

registerEnumType(AccountType, {
  name: 'AccountType',
});

registerEnumType(menuType, {
  name: 'menuType',
});
