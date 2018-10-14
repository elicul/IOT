import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from 'location/location.entity';
import { CreateLocationDto } from './create-location-dto';
import * as moment from 'moment';
import { UpdateLocationDto } from './update-location-dto';

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(Location)
        private readonly locationRepository: Repository<Location>,
    ) {}

    async findAll(): Promise<Location[]> {
        return await this.locationRepository.find();
    }

    async findOne(id: number): Promise<Location> {
        return await this.locationRepository.findOne(id);
    }

    async create(createLocation: CreateLocationDto): Promise<Location> {
        const location = new Location(createLocation.name, moment().format('YYYY-MM-DD h:mm:ss'));
        return await this.locationRepository.save(location);
    }

    async update(updateLocation: UpdateLocationDto, id: number): Promise<Location> {
        let oldLocation;
        await this.findOne(id)
            .then(result => {
                oldLocation = result;
            })
            .catch(error => console.log(error));
        oldLocation.name = updateLocation.name;
        oldLocation.createDate = updateLocation.createdDate;
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
