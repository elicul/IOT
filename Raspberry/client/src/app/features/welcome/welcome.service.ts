import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TemperatureLocation } from '../../models/temperature-location.model';
import { Observable } from 'rxjs';
import { BaseService } from '../../shared/base.service';
import * as fromRoot from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Temperature } from '../../models/temperature.model';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService extends BaseService {

  constructor(private http: HttpClient, private store: Store<fromRoot.State>) {
    super(store);
  }

  getLocations(): Observable<Array<TemperatureLocation>> {
    return this.http.get<Array<TemperatureLocation>>(
      this.endpointConfiguration.GATEWAY_API_URL +
      this.endpointConfiguration.LOCATION);
  }
}
