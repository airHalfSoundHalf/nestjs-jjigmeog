import { Injectable } from '@nestjs/common';
import { CreateNestStudyDto } from './dto/create-nest-study.dto';
import { UpdateNestStudyDto } from './dto/update-nest-study.dto';

@Injectable()
export class NestStudyService {
  create(createNestStudyDto: CreateNestStudyDto) {
    return 'This action adds a new nestStudy';
  }

  findAll() {
    return `This action returns all nestStudy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nestStudy`;
  }

  update(id: number, updateNestStudyDto: UpdateNestStudyDto) {
    return `This action updates a #${id} nestStudy`;
  }

  remove(id: number) {
    return `This action removes a #${id} nestStudy`;
  }
}
