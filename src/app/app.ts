import { AuthState } from './core/authentication/Store/auth.reducer';
import { UserState } from './user/store/user.reducer';
import { DeviceState } from './device/store/reducers/device.reducer';
import { MapState } from './dashboard/map/store/map.reducer';

export interface AppState {
  readonly authState?: AuthState;
  readonly userState?: UserState;
  readonly deviceState?: DeviceState;
  readonly mapState?: MapState;
}
