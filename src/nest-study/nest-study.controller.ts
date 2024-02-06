import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NestStudyService } from './nest-study.service';
import { CreateNestStudyDto } from './dto/create-nest-study.dto';
import { UpdateNestStudyDto } from './dto/update-nest-study.dto';

@Controller('nest-study')
export class NestStudyController {
  constructor(private readonly nestStudyService: NestStudyService) {}

  @Post()
  create(@Body() createNestStudyDto: CreateNestStudyDto) {
    return this.nestStudyService.create(createNestStudyDto);
  }

  @Get()
  findAll() {
    return this.nestStudyService.findAll();
  }

  @Get('get:id')
  findOne(@Param('id') id: string) {
    return this.nestStudyService.findOne(+id);
  }

  @Patch('patch:id')
  update(
    @Param('id') id: string,
    @Body() updateNestStudyDto: UpdateNestStudyDto,
  ) {
    return this.nestStudyService.update(+id, updateNestStudyDto);
  }

  @Delete('delete:id')
  remove(@Param('id') id: string) {
    return this.nestStudyService.remove(+id);
  }
}
