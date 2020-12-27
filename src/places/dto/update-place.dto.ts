import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNumber } from 'class-validator';
import { CreatePlaceDto } from './create-place.dto';

export class UpdatePlaceDto extends PartialType(CreatePlaceDto) {
  @IsInt()
  readonly id: number;
}
