import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { SharedModule } from '../../shared/shared.module';
import { NotificationsService } from 'angular2-notifications';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './header/item/item.component';
import { WelcomeService } from './welcome.service';

export const ROUTES: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
];

@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderComponent,
    ItemComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule
  ],
  exports: [
    WelcomeComponent
  ],
  providers: [
    NotificationsService,
    WelcomeService
  ]
})
export class WelcomeModule {}
