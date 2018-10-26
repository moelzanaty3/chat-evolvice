import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { IMarker } from './marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // google maps zoom level
  zoom: number = 8;
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  markers: IMarker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      iconUrl: 'https://www.evolvice.de/wp-content/themes/evolvice-theme/assets/icons/dot-orbit.png'
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      iconUrl: 'https://www.evolvice.de/wp-content/themes/evolvice-theme/assets/icons/dot-orbit.png'
    },
    {
      lat: 51.723858,
      lng: 10.895982,
      iconUrl: 'https://www.evolvice.de/wp-content/themes/evolvice-theme/assets/icons/dot-orbit.png'
    }
  ];
  placeInfo: Object;

  constructor(private _http: HttpClient) {}

  ngOnInit() {}

  /**
   * get the marker place info.
   */
  clickedMarker(marker: IMarker) {
    this._http
      .get(
        `${environment.googleMapsApiEndPoint}?key=${environment.googleMapApiKey}&sensor=true&latlng=${marker.lat},${
          marker.lng
        }`
      )
      .subscribe(data => {
        this.placeInfo = data['results'][0]['formatted_address'];
      });
  }
}
