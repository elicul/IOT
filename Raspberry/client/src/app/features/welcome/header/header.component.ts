import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Location } from '../../../models/location.model';
import { WelcomeService } from '../welcome.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() locations: Array<Location>;

  constructor(private welcomeService: WelcomeService) { }

  ngOnInit() {
  }

}
