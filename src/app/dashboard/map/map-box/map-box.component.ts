import { Component, OnInit } from '@angular/core';
import { JsonService } from '../services/json.service';

import { LngLatLike } from 'mapbox-gl';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

import hike from '../../../../assets/csvjson.json';

import { MapFacade } from '../map.facade';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css'],
})
export class MapBoxComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  opacityValue = 100;
  vertical = false;
  tickInterval = 1;
  imageLoaded = false;

  satellite: boolean = false;
  BrpZone: boolean = false;
  heightMap: boolean = false;

  treeWidth = Type.treeWidth;
  soilScan = Type.soilScan;
  num = 15;
  selected = Type.none;
  data2: MetingPoint[];
  loaded = false;

  center: LngLatLike;
  zoom = [0];
  pitch: number;
  private timer: number;

  constructor(private mapFacade: MapFacade) {}

  inc() {
    this.num += 1;
  }
  dec() {
    this.num -= 1;
  }

  alert(message: string) {
    alert(message);
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    window.clearInterval(this.timer);
  }
  hoverFilter = ['==', 'name', ''];

  activateHoverOn(evt: any) {
    this.hoverFilter = ['==', 'name', evt.features[0].properties.name];
  }

  disableHover() {
    this.hoverFilter = ['==', 'name', ''];
  }
  setType(type: Type) {
    this.selected = type;
  }
}

export interface MetingPoint {
  totaal_metingen: number;
  werkelijke_boom_breedte: number;
  meting_status: string;
  DateTime: string;
  kalibratie_waarde: string;
  aantal_metingen: number;
  latitude: number;
  longnitude: number;
}

export enum Type {
  soilScan,
  treeWidth,
  none,
}
