import * as mapActions from './map.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MapActionTypes } from './map.action';
import * as fromRoot from '../../../app';
export interface MapState {
  enableSatellite: boolean;
  enableBrpZone: boolean;

  error: string;
}
export interface AppState extends fromRoot.AppState {
  mapState: MapState;
}

export const initialState: MapState = {
  enableSatellite: true,
  enableBrpZone: false,
  error: '',
};
export function authReducer(
  state = initialState,
  action: mapActions.Action
): MapState {
  switch (action.type) {
    case MapActionTypes.Enable_satellite: {
      return {
        ...state,
        enableSatellite: !this.enableSatellite,
      };
    }
    case MapActionTypes.Enable_Brp_Zone: {
      return {
        ...state,
        enableBrpZone: !this.enableBrpZone,
      };
    }
    default: {
      return state;
    }
  }
}

const getMapFeatureState = createFeatureSelector<MapState>('map');

export const getError = createSelector(
  getMapFeatureState,
  (state: MapState) => state.error
);

export const getSatelliteStatus = createSelector(
  getMapFeatureState,
  (state: MapState) => state.enableSatellite
);
export const getBrpZoneStatus = createSelector(
  getMapFeatureState,
  (state: MapState) => state.enableBrpZone
);
