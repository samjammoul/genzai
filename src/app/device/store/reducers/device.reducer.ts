import * as fromRoot from '../../../app';
import * as DeviceAction from '../actions/device.actions';
import { DeviceActionTypes } from '../actions/device.actions';
import { DeviceForm } from '../device';

export interface DeviceState {
  deviceForm: DeviceForm | null;
  error: string;
}
export interface AppState extends fromRoot.AppState {
  authState: DeviceState;
}

export const initialState: DeviceState = {
  deviceForm: null,
  error: '',
};
export function authReducer(
  state = initialState,
  action: DeviceAction.DeviceActions
): DeviceState {
  switch (action.type) {
    case DeviceActionTypes.LoadDevices: {
      return {
        ...state,
      };
    }
    case DeviceActionTypes.LoadDevicesSuccess: {
      return {
        ...state,
      };
    }
    case DeviceActionTypes.LoadDevicesFailure: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}
