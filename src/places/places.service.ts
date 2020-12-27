import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './place.entity';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,
  ) {}

  async findAll(): Promise<Place[]> {
    return await this.placeRepository.find();
  }

  async findOne(id: number): Promise<Place> {
    return await this.placeRepository.findOne(id);
  }

  async create(placeDto: CreatePlaceDto): Promise<Place> {
    return await this.placeRepository.save(placeDto);
  }

  async update(id: number, placeDto: UpdatePlaceDto): Promise<Place> {
    const place = await this.placeRepository.findOne(id);
    place.name = placeDto.name;
    place.kakaoPlaceId = placeDto.kakaoPlaceId;
    place.description = placeDto.description;
    place.addressName = placeDto.addressName;
    return await this.placeRepository.save(place);
  }

  async delete(id: number): Promise<void> {
    await this.placeRepository.delete(id);
  }
}
