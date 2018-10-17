import { Injectable } from '@angular/core';
import { EndpointConfiguration } from '../../models/endpoint-configuration.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EndpointConfigurationService {
    constructor(private http: HttpClient) { }

    loadEndpointConfiguration(url: string): Observable<EndpointConfiguration> {
      return this.http.get<EndpointConfiguration>(url);
    }
}
