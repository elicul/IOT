import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as moment from 'moment';

@Entity()
export class Temperature {
    constructor(temperature?: number, humidity?: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.createdDate = moment().format('YYYY-MM-DD h:mm:ss');
    }

    @PrimaryGeneratedColumn() id: number;

    @Column() temperature: number;

    @Column() humidity: number;

    @Column('datetime') createdDate: string;
}
