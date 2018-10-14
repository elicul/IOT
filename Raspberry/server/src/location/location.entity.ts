import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column('datetime') createdDate: string;
}
