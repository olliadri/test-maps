import { Component } from '@angular/core';
import {GoogleMap, GoogleMaps, LocationService, MyLocation} from "@ionic-native/google-maps";
import {Geolocation} from "@ionic-native/geolocation";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: GoogleMap;

  constructor(private geolocation: Geolocation) {

  }

  ionViewEnter() {
    setTimeout(this.loadMap.bind(this), 1000);
  }

  ionViewDidLoad() {
    console.log('load map');
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.map = GoogleMaps.create('map_canvas',
        {
          camera : { target: {lat: resp.coords.latitude, lng: resp.coords.longitude}, zoom: 17 }
        });
      console.log(this.map);
    }).catch((err) => { console.log(err); })
  }
}
