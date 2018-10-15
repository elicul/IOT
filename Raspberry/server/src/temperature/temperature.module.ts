import { Module } from '@nestjs/common';
import { TemperatureController } from './temperature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Temperature } from './temperature.entity';
import { TemperatureService } from './temperature.service';

@Module({
  imports: [TypeOrmModule.forFeature([Temperature])],
  providers: [TemperatureService],
  controllers: [TemperatureController],
})
export class TemperatureModule {}
