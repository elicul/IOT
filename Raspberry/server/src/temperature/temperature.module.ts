import { Module } from '@nestjs/common';
import { TemperatureController } from './temperature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Temperature } from './temperature.entity';
import { TemperatureService } from './temperature.service';
import { LocationModule } from 'location/location.module';

@Module({
  imports: [TypeOrmModule.forFeature([Temperature]), LocationModule],
  providers: [TemperatureService],
  controllers: [TemperatureController],
})
export class TemperatureModule {}
