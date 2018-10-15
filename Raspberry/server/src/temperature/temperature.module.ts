import { Module } from '@nestjs/common';
import { TemperatureController } from './temperature.controller';

@Module({
  controllers: [TemperatureController]
})
export class TemperatureModule {}
