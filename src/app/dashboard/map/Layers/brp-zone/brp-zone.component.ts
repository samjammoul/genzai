import { Component, OnInit } from '@angular/core';
import hike3 from '../../../../../assets/fields.json';
import { of } from 'rxjs';
@Component({
  selector: 'app-brp-zone',
  templateUrl: './brp-zone.component.html',
  styleUrls: ['./brp-zone.component.css'],
})
export class BrpZoneComponent implements OnInit {
  data12: GeoJSON.FeatureCollection<GeoJSON.LineString>;
  constructor() {}

  ngOnInit(): void {
    of(hike3)
      .pipe
      //      delay(500) // Simulate call
      ()
      .subscribe((data: any) => {
        this.data12 = data;
      });
  }
}
