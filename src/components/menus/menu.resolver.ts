import { Body, Param } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MenuInput } from 'src/dto/inputs/menu.input';
import { Menu } from 'src/entities/menu.entity';
import { IMenu } from 'src/types/menu.interface';
import { MenuService } from './menu.service';

@Resolver()
export class MenuResolver {
  constructor(private menuService: MenuService) {}

  @Query(() => [Menu])
  public async menus(): Promise<Menu[]> {
    return await this.menuService.findAll().catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Menu)
  public async addMenu(@Args('newMenu') newMenu: MenuInput): Promise<Menu> {
    return await this.menuService.create(newMenu).catch((err) => {
      throw err;
    });
  }

  @Query(() => Menu)
  async getMenu(@Args('id', { type: () => Int }) id: number) {
    return await this.menuService.get(id).catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Menu)
  async deleteMenu(@Args('id') id: number): Promise<Menu> {
    return await this.menuService.delete(id).catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Menu)
  async updateMenu(@Args('id') id: number, @Args('Input') Input: MenuInput) {
    const menu = await this.menuService
      .update(id, Input as IMenu)
      .catch((err) => {
        throw err;
      });
    return menu;
  }
}
