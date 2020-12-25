import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import hike from '../../../../../assets/csvjson.json';

@Component({
  selector: 'app-soil-scan',
  templateUrl: './soil-scan.component.html',
  styleUrls: ['./soil-scan.component.css'],
})
export class SoilScanComponent implements OnInit {
  data10: Point[];
  constructor() {}

  ngOnInit(): void {
    of(hike)
      .pipe
      // delay(500) // Simulate call
      ()
      .subscribe((data: Point[]) => {
        this.data10 = data;
      });
  }
}
interface Point {
  Latitude: number;
  Longitude: number;
  year: number;
  month: number;
  day: number;
  hr: number;
  min: number;
  sec: number;
  'alt(m)': number;
  qual: number;
  sats: number;
  'x(m)': number;
  'y(m)': number;
  'speed(km/h)': number;
  raw1: number;
  raw2: number;
  raw3: number;
  raw4: number;
  raw5: number;
  raw6: number;
  info: number;
  'QP0_5(mS/m)': number;
  'IP0_5(mS/m)': number;
  'T0_5(degr)': number;
  'QP1_0(mS/m)': number;
  'IP1_0(mS/m)': number;
  'T1_0(degr)': number;
  'QP05_HorCal(mS/m)': number;
  'IP05_HorCal(mS/m)': number;
  'QP10_HorCal(mS/m)': number;
  'IP10_HorCal(mS/m)': number;
  'QP05_VerCal(mS/m)': number;
  'IP05_VerCal(mS/m)': number;
  'QP10_VerCal(mS/m)': number;
  'IP10_VerCal(mS/m)': number;
}
