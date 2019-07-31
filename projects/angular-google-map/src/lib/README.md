# Angular 2/4/6/8 Google Map
[![npm version](https://img.shields.io/npm/v/angular2-google-map.svg)](https://www.npmjs.com/package/angular2-google-map)

Angular 2+ Google Map Component.

<!-- [Demos / Examples](link). -->

## Getting Started


### Installation
- Google map package is published on the [npm](https://www.npmjs.com/package/angular2-google-map) Registry. 
- Install the package :
    `npm install angular2-google-map --save`

-Generate google map api key from google developer site [Link](https://developers.google.com/maps/documentation/javascript/get-api-key)

-Once installed Add ```html
  <script src="http://maps.googleapis.com/maps/api/js?key=<API_KEY>"> </script> ``` 
  to your index.html file head tag
  
- import `AngularGoogleMapModule` from the installed package into your module as follows:


### Usage
Import `AngularGoogleMapModule` into `NgModule` in `app.module.ts`.
```js
import { AngularGoogleMapModule } from 'angular2-google-map';

@NgModule({
  // ...
  imports: [
    AngularWeatherWidgetModule
  ]
  // ...
})
```

Add the following component tag in you template (no properties)
```html
<angular-google-map [mapSettings]='settings'></angular-google-map>
```

Full properties
```js
  settings = {
    zoomValue: 15,
    isGeolocation: false,
    customStyles: [],
    latitude: 40.7128,
    longitude: 74.0060,
    enableGestureHandling: 'none',
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
      lat: 0,
      lng: 0
    },{
      isEnable: true,
      isDragable: true,
      animation: true,
      clickToggle: true,
      lat: 0,
      lng: 0
    }]
  }
```


### Properties
The following list of properties are supported by the component.

| Property         |Type    | Description            | Default Value | options |
|:--- |:--- |:--- |:--- |
| zoomValue | Number | Map's initial zoom value  | 15 | |
| isGeolocation | Boolean | Take user's location  | false | |
| customStyles | Array | Add custom styles to map | [] | style [options](https://mapstyle.withgoogle.com/) |
| latitude | Number | Latitude of the location | 40.7128 | |
| longitude | Number | Longitude of the location  | 74.0060 | |
| enableGestureHandling | String | control zoom, page scrolling | none  | cooperative, greedy, [details](https://developers.google.com/maps/documentation/javascript/interaction) |
| disableDefaultUI | Boolean | Enables/disables all default UI. May be overridden individually | true | |
| isSatelliteView | Boolean | Enable Satellite View of the map | false | |
| isZoomControl | Boolean | Enable UI for map zooming option (+ & -) | true | |
| isStreetViewControl | Boolean | The initial enabled/disabled state of the Street View Pegman control | false | |
| showPixelAndCoordinates | Boolean |  World coordinates, which reference a point on the map uniquely. | true | |
| address | Object | Show informations | {
      filed1: 'Bruce wayne',
      filed2: 'Wayne manor',
      filed3: '1007 Mountain Drive',
      filed4: 'Gotham',
      filed5: 'United States',
    } | |
| isDarkTheme | Boolean | Enable dark theme | true | |

| enableMarker | Array | Mark places to map | {
      isEnable: true,
      isDragable: true,
      animation: true,
      clickToggle: true,
      lat: 0,
      lng: 0
     | |


## Run locally
- Clone the repository or downlod the .zip,.tar files.
- Run `npm install`
- Run `ng serve` for a dev server
- Navigate to `http://localhost:4200/`

## License
MIT License.
