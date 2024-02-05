import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Hero } from './hero.entity';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';

@Module({
  // Hero 엔터티에 대한 TypeORM 레포지토리가 HeroesService와 HeroesController에서 사용할 수 있게 된다.
  imports: [TypeOrmModule.forFeature([Hero])],
  providers: [HeroesService],
  controllers: [HeroesController],
})
export class HeroesModule {}
