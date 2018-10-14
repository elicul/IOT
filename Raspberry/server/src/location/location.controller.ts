import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from 'location/location.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { CreateLocationDto } from './create-location-dto';
import { UpdateLocationDto } from './update-location-dto';

@ApiUseTags('location')
@Controller('location')
export class LocationController {
    constructor(private readonly locationService: LocationService) {}

    @Post()
    async create(@Body() createLocationDto: CreateLocationDto) {
        return await this.locationService.create(createLocationDto);
    }

    @Get()
    findAll(@Query() query): Promise<Location[]> {
        // return `This action returns all cats (limit: ${query.limit} items)`;
        return this.locationService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Location> {
        return this.locationService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateLocationDto: UpdateLocationDto): Promise<Location> {
        return this.locationService.update(updateLocationDto, id);
    }

    @Delete(':id')
    remove(@Param('id') id): Promise<Location[]> {
        return this.locationService.delete(id);
    }

}
