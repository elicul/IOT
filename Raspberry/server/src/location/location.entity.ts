import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as moment from 'moment';

@Entity()
export class Location {

  constructor(name?: string) {
    this.name = name;
    this.createdDate = moment().format('YYYY-MM-DD h:mm:ss');
  }

  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column('datetime') createdDate: string;
}
