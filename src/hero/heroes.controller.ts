import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { Hero } from './hero.entity';
import { HeroesService } from './heroes.service';

@Crud({
  model: {
    type: Hero,
  },
})
/**
 * @define @Controller
 * 라우팅에서 /heroes 앤드포인트에 매핑되도록 설정
 * */
@Controller('heroes')
export class HeroesController {
  constructor(public service: HeroesService) {}
}
