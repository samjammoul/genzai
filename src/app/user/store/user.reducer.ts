import * as UserActions from './user.action';
import { UserActionTypes } from './user.action';
import { UserForm } from './user';
import * as Root from '../../app';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../../core/authentication/Store/auth.reducer';

export interface UserState {
  userInfo?: UserForm | null;
  error: string;
}
export interface AppState extends Root.AppState {
  userState: UserState;
}
export const initialUSERState: UserState = {
  userInfo: {
    userName: 'Joe980',
    email: 'Joe@email.com',
    address: 'adress 5061',
    companyName: 'TestCo',
    companyAddress: 'Company address 88',
    bankAccount: 'Nl INGB y75867458765',
    phoneNumber: '06897566757',
    billingAddress: 'Company address 88',
    subscription: ' until 14-09-2025',
  },
  error: '',
};
export function UserReducer(
  state = initialUSERState,
  action: UserActions.Action
): UserState {
  switch (action.type) {
    case UserActionTypes.Update_User_information: {
      return {
        ...state,
      };
    }
    case UserActionTypes.Update_User_information_Fail: {
      return {
        ...state,
      };
    }
    case UserActionTypes.Update_User_information_Success: {
      return {
        ...state,
      };
    }
    case UserActionTypes.Get_User_information: {
      return {
        ...state,
      };
    }
    case UserActionTypes.Get_User_information_Fail: {
      return {
        ...state,
      };
    }
    case UserActionTypes.Get_User_information_Success: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}

const getUserFeatureState = createFeatureSelector<UserState>('userStore');

export const getError = createSelector(
  getUserFeatureState,
  (state: UserState) => state.error
);

export const getUserInfo = createSelector(
  getUserFeatureState,
  (state: UserState) => state.userInfo
);
