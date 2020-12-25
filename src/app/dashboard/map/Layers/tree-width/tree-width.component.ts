import { Component, OnInit } from '@angular/core';
import { MetingPoint } from '../../map-box/map-box.component';
import { JsonService } from '../../services/json.service';
import { MapFacade } from '../../map.facade';

@Component({
  selector: 'app-tree-width',
  templateUrl: './tree-width.component.html',
  styleUrls: ['./tree-width.component.css'],
})
export class TreeWidthComponent implements OnInit {
  constructor(private service: JsonService, private mapFacade: MapFacade) {
    this.service.getJSON().subscribe((data: MetingPoint[]) => {
      this.data2 = data;
    });
  }
  data2: MetingPoint[];
  ngOnInit(): void {}
}
