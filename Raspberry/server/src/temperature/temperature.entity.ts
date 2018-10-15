import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Location } from '../location/location.entity';

@Entity()
export class Temperature {
    constructor(temperature?: number, humidity?: number, location?: Location) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.location = location;
    }

    @PrimaryGeneratedColumn() id: number;

    @Column('float', { precision: 4, scale: 2 }) temperature: number;

    @Column('float', { precision: 4, scale: 2 }) humidity: number;

    @CreateDateColumn() createdDateUTC: string;

    @ManyToOne(type => Location, location => location.temperatures, {
        cascade: true,
    })
    location: Location;
}
