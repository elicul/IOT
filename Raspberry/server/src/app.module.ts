import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PhotoModule } from './photo/photo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    PhotoModule,
    LocationModule,
  ],
})
export class AppModule {}