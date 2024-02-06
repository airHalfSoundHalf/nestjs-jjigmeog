import { Module } from '@nestjs/common';
import { NestStudyService } from './nest-study.service';
import { NestStudyController } from './nest-study.controller';

@Module({
  controllers: [NestStudyController],
  providers: [NestStudyService],
})
export class NestStudyModule {}
