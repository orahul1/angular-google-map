import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2-google-map';
  settings = {
    zoomValue: 1500,
    isGeolocation: false,
    customStyles: [],
    latitude: 40.7128,
    longitude: 74.0060,
    enableGestureHandling: 'greedy',
    disableDefaultUI: true,
    isSatelliteView: false,
    isZoomControl: true,
    isStreetViewControl: false,
    showPixelAndCoordinates: true,
    address : {
      filed1: 'Bruce wayne',
      filed2: 'Wayne manor',
      filed3: '1007 Mountain Drive',
      filed4: 'Gotham',
      filed5: 'United States',
    },
    isDarkTheme: true,
    enableMarker: [{
      isEnable: true,
      isDragable: true,
      animation: true,
      clickToggle: true,
      lat: 8.546814399999999,
      lng: 76.8790981
    },{
      isEnable: true,
      isDragable: true,
      animation: true,
      clickToggle: true,
      lat: 8.5458,
      lng: 76.8799
    }]
  }
}
