import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';
import { TemperatureModule } from './temperature/temperature.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    // AuthModule,
    LocationModule,
    TemperatureModule,
  ],
})
export class AppModule {}