import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';
import { TemperatureModule } from './temperature/temperature.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LocationModule,
    TemperatureModule,
  ],
})
export class AppModule {}