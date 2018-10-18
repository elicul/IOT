import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { LocationDto } from './location-dto';
import { last, orderBy } from 'lodash';
import { Temperature } from '../temperature/temperature.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async findAll(): Promise<Location[]> {
    const locations = await this.locationRepository.find({
      order: {
        name: 'ASC',
      },
      relations: ['temperatures'],
    });

    locations.forEach(location => {
      location.temperatures = orderBy(location.temperatures, ['id'], ['asc']);
      const lastTemperature = last(location.temperatures);
      location.temperatures = new Array<Temperature>();
      location.temperatures.push(lastTemperature);
    });

    return Promise.resolve(locations);
  }

  async findOne(id: number): Promise<Location> {
    return await this.locationRepository.findOne(id);
  }

  async create(createLocation: LocationDto): Promise<Location> {
    const location = new Location(createLocation.name);

    return await this.locationRepository.save(location);
  }

  async update(updateLocation: LocationDto, id: number): Promise<Location> {
    const oldLocation = await this.findOne(id);
    oldLocation.name = updateLocation.name;

    return await this.locationRepository.save(oldLocation);
  }

  async delete(id: number): Promise<Location> {
    const oldLocation = await this.locationRepository.findOne(id);

    return await this.locationRepository.remove(oldLocation);
  }
}
