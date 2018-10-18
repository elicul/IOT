import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Temperature } from '../../../../models/temperature.model';
import { WelcomeService } from '../../welcome.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { TemperatureLocation } from 'src/app/models/temperature-location.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  @Input() location: TemperatureLocation;

  constructor() { }

  ngOnInit(): void {
  }

}
