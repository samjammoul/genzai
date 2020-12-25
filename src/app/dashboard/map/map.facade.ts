import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as map from '../../dashboard/map/store/map.reducer';
import { filter } from 'rxjs/operators';
import * as mapActions from '../../dashboard/map/store/map.action';

@Injectable()
export class MapFacade {
  error$ = this.store.pipe(select(map.getError));
  $getSatelliteStatus = this.store.pipe(
    select(map.getSatelliteStatus),
    filter(Boolean)
  );
  $getBrpZoneStatus = this.store.pipe(
    select(map.getBrpZoneStatus),
    filter(Boolean)
  );

  constructor(private store: Store<map.AppState>) {}

  enableSatellite() {
    this.store.dispatch(new mapActions.EnableSatellite());
  }

  enableBrpZone() {
    this.store.dispatch(new mapActions.EnableBrpZone());
  }
}
