import { Injectable } from '@nestjs/common';
import { Temperature } from './temperature.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TemperatureDto } from './temperature-dto';
import { Location } from '../location/location.entity';

@Injectable()
export class TemperatureService {
    constructor(
        @InjectRepository(Temperature)
        private readonly temperatureRepository: Repository<Temperature>,
    ) {}

    async findAll(): Promise<Temperature[]> {
        return await this.temperatureRepository.find({
            order: {
                temperature: 'ASC',
            },
            // skip: 1,
            take: 10,
            cache: true,
            relations: ['location'],
        });
    }

    async findLast(): Promise<Temperature> {
        return await this.temperatureRepository.findOne({
            order: {
                id: 'DESC',
            },
            relations: ['location'] });
    }

    async findOne(id: number): Promise<Temperature> {
        return await this.temperatureRepository.findOne(id, { relations: ['location'] });
    }

    async create(createTemperature: TemperatureDto, location: Location): Promise<Temperature> {
        const temperature = new Temperature(
                                createTemperature.temperature,
                                createTemperature.humidity,
                                location);

        return await this.temperatureRepository.save(temperature);
    }

    async update(updateTemperature: TemperatureDto, id: number): Promise<Temperature> {
        const oldTemperature = await this.findOne(id);
        oldTemperature.temperature = updateTemperature.temperature;
        oldTemperature.humidity = updateTemperature.humidity;

        return await this.temperatureRepository.save(oldTemperature);
    }

    async delete(id: number): Promise<Temperature> {
        const oldTemperature = await this.temperatureRepository.findOne(id);
        return await this.temperatureRepository.remove(oldTemperature);
    }
}
