import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Temperature } from '../../../../models/temperature.model';
import { WelcomeService } from '../../welcome.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  @Input()
  set locationId(id: number) {
    this.temperature$ = this.welcomeService.getTemperature(id);
  }
  get locationId(): number {
    return this._locationId.getValue();
  }

  temperature$: Observable<Temperature>;
  private _locationId = new BehaviorSubject<number>(undefined);

  constructor(private welcomeService: WelcomeService) { }

  ngOnInit(): void {
  }

}
