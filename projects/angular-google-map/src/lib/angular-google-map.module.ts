import { NgModule } from '@angular/core';
import { AngularGoogleMapComponent } from './angular-google-map.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AngularGoogleMapComponent],
  imports: [
    CommonModule
  ],
  exports: [AngularGoogleMapComponent],
  providers: []
})
export class AngularGoogleMapModule { }
