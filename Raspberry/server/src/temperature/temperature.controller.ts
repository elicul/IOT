import { Controller, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { TemperatureService } from './temperature.service';
import { TemperatureDto } from './temperature-dto';
import { Temperature } from './temperature.entity';

@ApiUseTags('temperature')
@Controller('temperature')
export class TemperatureController {
    constructor(private readonly temperatureService: TemperatureService) {}

    @Post()
    async create(@Body() temperatureDto: TemperatureDto) {
        return await this.temperatureService.create(temperatureDto);
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
    update(@Param('id') id: number, @Body() updatetemperatureDto: TemperatureDto): Promise<Temperature> {
        return this.temperatureService.update(updatetemperatureDto, id);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<Temperature[]> {
        return this.temperatureService.delete(id);
    }
}
