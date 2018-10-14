import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {

  constructor(name?: string, createdDate?: string) {
    this.name = name;
    this.createdDate = createdDate;
  }

  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column('datetime') createdDate: string;
}
