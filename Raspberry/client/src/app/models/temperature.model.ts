import { Base } from './base.model';
import { Location } from './location.model';

export interface Temperature extends Base {
  temperature: number;
  humidity: number;
  location: Location;
}
