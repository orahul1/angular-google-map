# Angular 2/4/6/8 Google Map
[![npm version](https://img.shields.io/npm/v/ang-google-map.svg)](https://www.npmjs.com/package/ang-google-map)

Angular 2+ Google Map Component.

<!-- [Demos / Examples](link). -->

## Getting Started


### Installation
- Google map package is published on the [npm](https://www.npmjs.com/package/ang-google-map) Registry. 
- Install the package :
    `npm install ang-google-map --save`

-Generate google map api key from google developer site [Link](https://developers.google.com/maps/documentation/javascript/get-api-key)

-Once installed Add 
```js
  <script src="http://maps.googleapis.com/maps/api/js?key=<API_KEY>"> </script> 
  ``` 
  to your index.html file head tag 
- import `AngularGoogleMapModule` from the installed package into your module as follows:


### Usage
Import `AngularGoogleMapModule` into `NgModule` in `app.module.ts`.
```js
import { AngularGoogleMapModule } from 'ang-google-map';

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
<ang-google-map [mapSettings]='settings' [width]="'100%'" [height]="'400px'" [padding]="'0'" [margin] ="'0'"></ang-google-map>
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

| Property   |Type    | Description  | Default Value | options |
|:--- |:--- |:--- |:--- |:---|
| width | String | Width of the map  | '100%' | none |
| height | String | Height of the map  | '400px | none |
| padding | String | Padding of the  to map | '0' | none |
| margin | String | margin of the  to map | '0' | none |
| zoomValue | Number | Map's initial zoom value  | 15 | none |
| isGeolocation | Boolean | Take user's location  | false | none |
| customStyles | Array | Add custom styles to map | [] | style [options](https://mapstyle.withgoogle.com/) |
| latitude | Number | Latitude of the location | 40.7128 | none |
| longitude | Number | Longitude of the location  | 74.0060 | none |
| enableGestureHandling | String | control zoom, page scrolling | none | cooperative, greedy, [details](https://developers.google.com/maps/documentation/javascript/interaction) |
| disableDefaultUI | Boolean | Enables/disables all default UI. May be overridden individually | true | none |
| isSatelliteView | Boolean | Enable Satellite View of the map | false | none |
| isZoomControl | Boolean | Enable UI for map zooming option (+ & -) | true | none |
| isStreetViewControl | Boolean | The initial enabled/disabled state of the Street View Pegman control | false | none |
| showPixelAndCoordinates | Boolean |  World coordinates, which reference a point on the map uniquely. | true | none |
address | Object | Show informations | { filed1: 'Bruce wayne', filed2: 'Wayne manor', filed3: '1007 Mountain Drive', filed4: 'Gotham',filed5: 'United States'} | none |
| isDarkTheme | Boolean | Enable dark theme | true | none |
| enableMarker | Array | Mark places to map | [{ isEnable: true, isDragable: true, animation: true, clickToggle: true, lat: 0, lng: 0 }] | none |


## Run locally
- Clone the repository or downlod the .zip,.tar files.
- Run `npm install`
- Run `ng serve` for a dev server
- Navigate to `http://localhost:4200/`

## License
MIT License.
