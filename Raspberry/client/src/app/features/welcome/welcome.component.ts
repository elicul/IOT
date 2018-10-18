import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { interval, Observable } from 'rxjs';
import { TemperatureLocation } from '../../models/temperature-location.model';
import * as fromRoot from '../../store/app.reducer';
import { WelcomeService } from './welcome.service';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit {
  locations$: Observable<Array<TemperatureLocation>>;

  constructor(private store: Store<fromRoot.State>,
              private welcomeService: WelcomeService) {
  }

  ngOnInit(): void {
    this.locations$ = interval(60 * 1000)
      .pipe(
        startWith(0),
        switchMap(() => this.welcomeService.getLocations())
      );
  }
}
