import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private store: Store<fromRoot.State>) { }

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

}
