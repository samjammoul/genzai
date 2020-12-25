import { RegisterUser, AuthActionTypes } from './auth.action';
import * as AuthActions from './auth.action';
import { LoginForm, RegistrationForm } from './auth';
import * as fromRoot from '../../../app';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AuthState {
  registrationForm?: RegistrationForm | null;
  loginForm?: LoginForm | null;
  loggedIn?: boolean;
  registered?: boolean;
  Authenticated?: boolean;
  error: string;
}
export interface AppState extends fromRoot.AppState {
  authState: AuthState;
}

export const initialState: AuthState = {
  registrationForm: null,
  loginForm: null,
  loggedIn: false,
  error: '',
};
export function authReducer(
  state = initialState,
  action: AuthActions.Action
): AuthState {
  switch (action.type) {
    case AuthActionTypes.Register_User: {
      return {
        ...state,
      };
    }
    case AuthActionTypes.Registration_Success: {
      return {
        ...state,
        registered: true,
      };
    }
    case AuthActionTypes.Registration_Fail: {
      return {
        ...state,
        error: action.payload,
        registered: false,
      };
    }
    case AuthActionTypes.Login_User: {
      return {
        ...state,
        loggedIn: false,
      };
    }
    case AuthActionTypes.Login_Success: {
      return {
        ...state,
        loggedIn: true,
      };
    }
    case AuthActionTypes.Login_Fail: {
      return {
        ...state,
        error: action.payload,
        loggedIn: false,
      };
    }
    case AuthActionTypes.Authenticate_User: {
      return {
        ...state,
      };
    }
    case AuthActionTypes.Authentication_Success: {
      return {
        ...state,
        Authenticated: true,
      };
    }
    case AuthActionTypes.Authentication_Fail: {
      return {
        ...state,
        Authenticated: false,
      };
    }
    default: {
      return state;
    }
  }
}

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getError = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.error
);

export const getRegisterStatus = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.registered
);

export const getAuthStatus = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.Authenticated
);
