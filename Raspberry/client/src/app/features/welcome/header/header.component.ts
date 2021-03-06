import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TemperatureLocation } from '../../../models/temperature-location.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() locations: Array<TemperatureLocation>;

  constructor() { }

  ngOnInit() {
  }

}
