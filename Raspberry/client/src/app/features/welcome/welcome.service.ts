import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../../models/location.model';
import { Observable } from 'rxjs';
import { BaseService } from '../../shared/base.service';
import * as fromRoot from '../../store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService extends BaseService {

  constructor(private http: HttpClient, private store: Store<fromRoot.State>) {
    super(store);
  }

  getLocations(): Observable<Array<Location>> {
    return this.http.get<Array<Location>>(
      this.endpointConfiguration.GATEWAY_API_URL +
      this.endpointConfiguration.LOCATION);
  }
}
