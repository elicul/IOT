import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TemperatureLocation } from '../../models/temperature-location.model';
import * as fromRoot from '../../store/app.reducer';
import { WelcomeService } from './welcome.service';
import { Temperature } from '../../models/temperature.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit, OnDestroy {
  locations: Array<TemperatureLocation>;
  temperatures: Array<Temperature>;
  locationsSub: Subscription;
  temperatureSub: Subscription;

  constructor(private store: Store<fromRoot.State>,
              private welcomeService: WelcomeService) {
  }

  ngOnInit(): void {
    this.temperatures = [];
    this.locationsSub = this.welcomeService.getLocations()
    .subscribe(locations => {
      this.locations = locations;
      locations.forEach(location => {
        this.temperatureSub = this.welcomeService.getTemperature(location.id)
        .subscribe(temperature => {
          this.temperatures.push(temperature);
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.locationsSub.unsubscribe();
    this.temperatureSub.unsubscribe();
  }
}
