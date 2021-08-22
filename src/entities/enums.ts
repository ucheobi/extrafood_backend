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
  BURGER,
  SALAD,
  VEGETABLE_RICE,
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
