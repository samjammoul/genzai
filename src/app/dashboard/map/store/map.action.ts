// @ts-ignore
import { Action } from '@ngrx/store';
export enum MapActionTypes {
  Enable_satellite = '[Map] enable satellite',
  Enable_Brp_Zone = '[Map] Enable Brp Zone',
}

export class EnableSatellite implements Action {
  readonly type = MapActionTypes.Enable_satellite;
  constructor() {}
}
export class EnableBrpZone implements Action {
  readonly type = MapActionTypes.Enable_Brp_Zone;
  constructor() {}
}

export type Action = EnableSatellite | EnableBrpZone;
