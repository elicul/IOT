import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { Temperature } from 'temperature/temperature.entity';

@Entity()
export class Location {

  constructor(name?: string) {
    this.name = name;
  }

  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @CreateDateColumn() createdDateUTC: string;

  @OneToMany(type => Temperature, temperature => temperature.location)
  temperatures: Temperature[];
}
