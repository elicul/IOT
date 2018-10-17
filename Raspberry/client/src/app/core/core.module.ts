import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreComponent } from './core.component';
import { EndpointConfigurationService } from './services/endpoint-configuration.service';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UIService } from '../shared/ui/ui.service';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HttpClientModule } from '@angular/common/http';

export const COMPONENTS = [
  CoreComponent,
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    SimpleNotificationsModule.forRoot()
  ],
  exports: COMPONENTS
})
export class CoreModule {
  static forRoot(): any {
    return {
      ngModule: CoreModule,
      providers: [
        EndpointConfigurationService,
        UIService
      ]
    };
  }
}
