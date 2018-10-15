import { Controller, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { TemperatureService } from './temperature.service';
import { TemperatureDto } from './temperature-dto';
import { Temperature } from './temperature.entity';
import { LocationService } from 'location/location.service';

@ApiUseTags('temperature')
@Controller('temperature')
export class TemperatureController {
    constructor(private readonly temperatureService: TemperatureService,
                private readonly locationService: LocationService) {}

    @Post()
    async create(@Body() temperatureDto: TemperatureDto) {
        const location = await this.locationService.findOne(temperatureDto.locationId);

        return await this.temperatureService.create(temperatureDto, location);
    }

    @Get()
    findAll(@Query() query): Promise<Temperature[]> {
        // return `This action returns all cats (limit: ${query.limit} items)`;
        return this.temperatureService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Temperature> {
        return this.temperatureService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateTemperatureDto: TemperatureDto): Promise<Temperature> {
        return this.temperatureService.update(updateTemperatureDto, id);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<Temperature> {
        return this.temperatureService.delete(id);
    }
}
