import { Test, TestingModule } from '@nestjs/testing';
import { NestStudyController } from './nest-study.controller';
import { NestStudyService } from './nest-study.service';

describe('NestStudyController', () => {
  let controller: NestStudyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NestStudyController],
      providers: [NestStudyService],
    }).compile();

    controller = module.get<NestStudyController>(NestStudyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
