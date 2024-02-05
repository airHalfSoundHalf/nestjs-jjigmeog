import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Hero } from './hero.entity';

/**
 * @define @Injectable()
 * NestJs에게 해당 클래스가 의존성 주입(DI) 시스템에서 관리되어야 한다는 것을 알림
 * 모듈을 독립적으로 테스트 가능(용이성)
 * 다른 클래스에서 주입 가능(확장성)
 * */
@Injectable()
export class HeroesService extends TypeOrmCrudService<Hero> {
  // @InjectRepository를 사용하여 데이터베이스에 쿼리를 수행하거나 엔터티를 저장, 검색, 수정할 수 있다.
  constructor(@InjectRepository(Hero) repo) {
    super(repo);
  }
}
