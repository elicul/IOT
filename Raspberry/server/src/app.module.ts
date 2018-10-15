import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';
import { TemperatureModule } from './temperature/temperature.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3307,
    username: 'elicul',
    password: '123qweA!',
    database: 'test',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsTableName: 'migrations',
    migrations: [__dirname + '/migrations/*.ts'],
    cli: {
      migrationsDir: __dirname + '/migrations',
    },
  }), LocationModule, TemperatureModule],
})
export class AppModule {}
