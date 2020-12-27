import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PlacesService } from './places.service';
import { Place } from './place.entity';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  async getAll(): Promise<Place[]> {
    return this.placesService.findAll();
  }

  @Get('/:id')
  async getOne(@Param('id') id: number): Promise<Place> {
    return this.placesService.findOne(id);
  }

  @Post()
  create(@Body() placeDto: CreatePlaceDto): Promise<Place> {
    return this.placesService.create(placeDto);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() placeDto): Promise<Place> {
    // UpdatePlaceDto 타입을 넣으면 Param id 가 string to number 전환이 안됨.
    return this.placesService.update(id, placeDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.placesService.delete(id);
  }
}
