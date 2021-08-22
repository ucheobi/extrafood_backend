import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from 'src/entities/menu.entity';
import { MenuResolver } from './menu.resolver';
import { MenuService } from './menu.service';

@Module({
  imports: [TypeOrmModule.forFeature([Menu])],
  providers: [MenuService, MenuResolver],
  exports: [MenuService],
})
export class MenuModule {}
