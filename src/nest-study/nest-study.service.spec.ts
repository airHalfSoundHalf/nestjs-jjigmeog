import { Test, TestingModule } from '@nestjs/testing';
import { NestStudyService } from './nest-study.service';

describe('NestStudyService', () => {
  let service: NestStudyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestStudyService],
    }).compile();

    service = module.get<NestStudyService>(NestStudyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
