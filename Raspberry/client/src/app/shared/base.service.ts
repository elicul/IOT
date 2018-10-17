import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndpointConfiguration } from '../models/endpoint-configuration.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/app.reducer';
import * as fromCore from '../store/core/core.reducer';

@Injectable()
export abstract class BaseService {

  endpointConfiguration$: Observable<EndpointConfiguration>;
  endpointConfiguration: EndpointConfiguration;

  constructor(private _store: Store<fromRoot.State>) {
    this.endpointConfiguration$ = this._store.select(fromCore.getEndpointConfiguration);
    this.endpointConfiguration$.subscribe(response => {
      if (response)
        this.endpointConfiguration = response;
    });
  }
}
