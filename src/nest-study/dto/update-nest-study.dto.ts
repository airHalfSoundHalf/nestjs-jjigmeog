import { PartialType } from '@nestjs/mapped-types';
import { CreateNestStudyDto } from './create-nest-study.dto';

export class UpdateNestStudyDto extends PartialType(CreateNestStudyDto) {}
