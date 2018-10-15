import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './location.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { LocationDto } from './location-dto';

@ApiUseTags('location')
@Controller('location')
export class LocationController {
    constructor(private readonly locationService: LocationService) {}

    @Post()
    async create(@Body() createLocationDto: LocationDto) {
        return await this.locationService.create(createLocationDto);
    }

    @Get()
    findAll(@Query() query): Promise<Location[]> {
        return this.locationService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Location> {
        return this.locationService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateLocationDto: LocationDto): Promise<Location> {
        return this.locationService.update(updateLocationDto, id);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<Location> {
        return this.locationService.delete(id);
    }

}
