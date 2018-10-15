import { Injectable } from '@nestjs/common';
import { Temperature } from './temperature.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TemperatureDto } from './temperature-dto';

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
            skip: 1,
            take: 10,
            cache: true,
        });
    }

    async findOne(id: number): Promise<Temperature> {
        return await this.temperatureRepository.findOne(id);
    }

    async create(createTemperature: TemperatureDto): Promise<Temperature> {
        const temperature = new Temperature(
                                createTemperature.temperature,
                                createTemperature.humidity);

        return await this.temperatureRepository.save(temperature);
    }

    async update(updateTemperature: TemperatureDto, id: number): Promise<Temperature> {
        let oldTemperature;
        await this.findOne(id)
            .then(result => {
                oldTemperature = result;
            })
            .catch(error => console.log(error));
        oldTemperature.temperature = updateTemperature.temperature;
        oldTemperature.humidity = updateTemperature.humidity;

        return await this.temperatureRepository.save(oldTemperature);
    }

    async delete(id: number): Promise<Temperature[]> {
        let oldTemperature;
        await this.temperatureRepository.findOne(id)
            .then(result => {
                oldTemperature = result;
            })
            .catch(error => console.log(error));
        return await this.temperatureRepository.remove(oldTemperature);
    }
}
