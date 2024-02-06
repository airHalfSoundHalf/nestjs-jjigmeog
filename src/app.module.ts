import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestStudyModule } from './nest-study/nest-study.module';

@Module({
  imports: [NestStudyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
