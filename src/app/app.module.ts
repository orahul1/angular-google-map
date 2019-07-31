import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularGoogleMapModule } from '../../projects/angular-google-map/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularGoogleMapModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
