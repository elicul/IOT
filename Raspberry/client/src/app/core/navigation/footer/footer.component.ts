import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  currentYear: string;

  ngOnInit(): void {
    this.currentYear = moment()
      .format('YYYY');
  }
}
