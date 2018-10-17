import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Location } from '../../models/location.model';
import * as fromRoot from '../../store/app.reducer';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit {
  locations$: Observable<Array<Location>>;

  constructor(private store: Store<fromRoot.State>,
              private welcomeService: WelcomeService) {
  }

  ngOnInit(): void {
    this.locations$ = this.welcomeService.getLocations();
  }

}
