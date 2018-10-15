import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Temperature {
    constructor(temperature?: number, humidity?: number, createdDate?: string) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.createdDate = createdDate;
    }

    @PrimaryGeneratedColumn() id: number;

    @Column() temperature: number;

    @Column() humidity: number;

    @Column('datetime') createdDate: string;
}
