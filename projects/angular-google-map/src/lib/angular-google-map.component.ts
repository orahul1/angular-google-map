import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { google } from '@google/maps';
declare var google: any

@Component({
  selector: 'ang-google-map',
  templateUrl: 'angular-google-map.component.html',
  styleUrls: ['angular-google-map.component.scss']
})
export class AngularGoogleMapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  mapProp;
  TILE_SIZE = 256;
  @Input() width : '100%';
  @Input() height : '400px';
  @Input() padding : '0';
  @Input() margin : '0';
  @Input() mapSettings = {
    zoomValue: 15,
    isGeolocation: false,
    customStyles: [],
    latitude: 8.5581,
    longitude: 76.8816,
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

  constructor() { }

  ngOnInit() {
    this.isDarkMode();
    this.mapProp = {
      center: new google.maps.LatLng(this.mapSettings.latitude, this.mapSettings.longitude),
      zoom: this.mapSettings.zoomValue,
      styles: this.mapSettings.customStyles,
      disableDefaultUI: this.mapSettings.disableDefaultUI,
      mapTypeControl: this.mapSettings.isSatelliteView,
      zoomControl: this.mapSettings.isZoomControl,
      streetViewControl: this.mapSettings.isStreetViewControl,
      gestureHandling: this.mapSettings.enableGestureHandling,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.geolocation();
    this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProp);
    this.createMarker();
    this.showPixelAndCoordinates();
  }

  isDarkMode() {
    if (this.mapSettings.isDarkTheme) {
      this.mapSettings.customStyles = [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#263c3f' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#6b9a76' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#38414e' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#212a37' }]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9ca5b3' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#746855' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#1f2835' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#f3d19c' }]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#2f3948' }]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#17263c' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#515c6d' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#17263c' }]
        }
      ]
    }
  }


  showPixelAndCoordinates(){
    if(this.mapSettings.showPixelAndCoordinates){
    let coordInfoWindow = new google.maps.InfoWindow();
    coordInfoWindow.setContent(this.createInfoWindowContent(this.mapProp.center, this.map.getZoom()));
    coordInfoWindow.setPosition(this.mapProp.center);
    coordInfoWindow.open(this.map);
    }
  }


  createInfoWindowContent(latLng, zoom) {
    var scale = 1 << zoom;
    var worldCoordinate = this.project(latLng);

    var pixelCoordinate = new google.maps.Point(
        Math.floor(worldCoordinate.x * scale),
        Math.floor(worldCoordinate.y * scale));

    var tileCoordinate = new google.maps.Point(
        Math.floor(worldCoordinate.x * scale / this.TILE_SIZE),
        Math.floor(worldCoordinate.y * scale / this.TILE_SIZE));

    return [
      this.mapSettings.address.filed1,
      this.mapSettings.address.filed2,
      this.mapSettings.address.filed3,
      this.mapSettings.address.filed4,
      this.mapSettings.address.filed5,
    ].join('<br>');
  }

  // The mapping between latitude, longitude and pixels is defined by the web
  // mercator projection.
   project(latLng) {
    var siny = Math.sin(latLng.lat() * Math.PI / 180);

    // Truncating to 0.9999 effectively limits latitude to 89.189. This is
    // about a third of a tile past the edge of the world tile.
    siny = Math.min(Math.max(siny, -0.9999), 0.9999);

    return new google.maps.Point(
        this.TILE_SIZE * (0.5 + latLng.lng() / 360),
        this.TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)));
  }


  geolocation(){
    // Note: This example requires that you consent to location sharing when
    // prompted by your browser. If you see the error "The Geolocation service
    // failed.", it means you probably did not give permission for the browser to
    // locate you.
    if(this.mapSettings.isGeolocation){
    let infoWindow = new google.maps.InfoWindow;
    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.mapSettings.latitude, lng: this.mapSettings.longitude },
        zoom: this.mapSettings.zoomValue
    });
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);
        }, function() {
          this.handleLocationError(true, map, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
         this.handleLocationError(false, map, infoWindow, map.getCenter());
      }
    }
  }  
  handleLocationError(browserHasGeolocation, map, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}


  createMarker() {
    for(let i = 0 ; i < this.mapSettings.enableMarker.length; i ++){
    if (this.mapSettings.enableMarker[i].isEnable) {
      var myLatLng = { lat: this.mapSettings.enableMarker[i].lat, lng: this.mapSettings.enableMarker[i].lng };

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        draggable: this.mapSettings.enableMarker[i].isDragable
      });

      //if true => drop animation for markers
      if(this.mapSettings.enableMarker[i].animation){
        marker.setAnimation(google.maps.Animation.DROP)
      }
      //if true => bounce animation when user click marker
      if (this.mapSettings.enableMarker[i].clickToggle) {
        marker.addListener('click', () => {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
        });
      }
    }
  }
}
}
