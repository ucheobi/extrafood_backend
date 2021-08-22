import { Query, Resolver } from '@nestjs/graphql';
import { MenuService } from './menu.service';

@Resolver()
export class MenuResolver {
  constructor(private menuService: MenuService) {}

  @Query(() => String)
  public async getMenu() {
    return 'Hello from my Menu Module';
  }
}
