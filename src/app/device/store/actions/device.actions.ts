import { Action } from '@ngrx/store';

export enum DeviceActionTypes {
  LoadDevices = '[Device] Load Devices',
  LoadDevicesSuccess = '[Device] Load Devices Success',
  LoadDevicesFailure = '[Device] Load Devices Failure',
}

export class LoadDevices implements Action {
  readonly type = DeviceActionTypes.LoadDevices;
}

export class LoadDevicesSuccess implements Action {
  readonly type = DeviceActionTypes.LoadDevicesSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadDevicesFailure implements Action {
  readonly type = DeviceActionTypes.LoadDevicesFailure;
  constructor(public payload: { error: any }) { }
}

export type DeviceActions = LoadDevices | LoadDevicesSuccess | LoadDevicesFailure;

