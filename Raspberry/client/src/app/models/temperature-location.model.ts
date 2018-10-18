import { Base } from './base.model';
import { Temperature } from './temperature.model';

export interface TemperatureLocation extends Base {
  name: string;
  temperatures: Array<Temperature>;
}
