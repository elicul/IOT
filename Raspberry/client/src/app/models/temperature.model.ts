import { Base } from './base.model';
import { TemperatureLocation } from './temperature-location.model';

export interface Temperature extends Base {
  temperature: number;
  humidity: number;
  location: TemperatureLocation;
}
