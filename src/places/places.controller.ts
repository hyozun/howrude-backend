import { Controller, Get } from '@nestjs/common';
import { PlacesService } from './places.service';
import { Place } from './place.entity';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  async getAll(): Promise<Place[]> {
    return this.placesService.findAll();
  }
}
