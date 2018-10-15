import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from 'location/location.entity';
import { LocationDto } from './location-dto';

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(Location)
        private readonly locationRepository: Repository<Location>,
    ) {}

    async findAll(): Promise<Location[]> {
        return await this.locationRepository.find({
            order: {
                name: 'ASC',
            },
            skip: 1,
            take: 10,
            cache: true,
        });
    }

    async findOne(id: number): Promise<Location> {
        return await this.locationRepository.findOne(id);
    }

    async create(createLocation: LocationDto): Promise<Location> {
        const location = new Location(createLocation.name);

        return await this.locationRepository.save(location);
    }

    async update(updateLocation: LocationDto, id: number): Promise<Location> {
        let oldLocation;
        await this.findOne(id)
            .then(result => {
                oldLocation = result;
            })
            .catch(error => console.log(error));
        oldLocation.name = updateLocation.name;

        return await this.locationRepository.save(oldLocation);
    }

    async delete(id: number): Promise<Location[]> {
        let oldLocation;
        await this.locationRepository.findOne(id)
            .then(result => {
                oldLocation = result;
            })
            .catch(error => console.log(error));

        return await this.locationRepository.remove(oldLocation);
    }
}
