import {
  Controller,
  Delete,
  Get,
  Injectable,
  InternalServerErrorException,
  Post,
  Put,
} from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuInput } from 'src/dto/inputs/menu.input';
import { Menu } from 'src/entities/menu.entity';
import { IMenu } from 'src/types/menu.interface';
import { Repository } from 'typeorm';

@Injectable()
@Controller('menus')
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}

  @Get()
  public async findAll(): Promise<Menu[]> {
    return await this.menuRepository.find({}).catch((err) => {
      throw new Error('There is a problem fetching data from the server');
    });
  }

  @Post()
  public async create(newMenuData: MenuInput): Promise<Menu> {
    const newMenu = this.menuRepository.create(newMenuData);
    await this.menuRepository.save(newMenu);

    return newMenu;
  }

  @Get(':id')
  public async get(@Args('menuId') menuId: number): Promise<Menu> {
    return await this.menuRepository.findOne({ id: menuId });
  }

  @Delete(':id')
  public async delete(@Args('menuId') menuId: number): Promise<any> {
    return await this.menuRepository.delete(menuId);
  }

  @Put(':id')
  public async update(id: number, inputData: MenuInput): Promise<any> {
    return await this.menuRepository.update(id, inputData).catch((err) => {
      throw err;
    });

    //const { name, description, price, image, menu_type } = updateMenuData;
  }
}
