// @ts-ignore
import { Action } from '@ngrx/store';
// @ts-ignore
import { RegistrationForm } from './registration';

export enum AuthActionTypes {
  Register_User = '[Auth] register User',
  Registration_Success = '[Auth] registration Success',
  Registration_Fail = '[Auth] registration Fail',
  Login_User = '[Auth] Login User',
  Login_Success = '[Auth] Login Success',
  Login_Fail = '[Auth] Login Fail',
  Authenticate_User = '[Auth] Authenticate User',
  Authentication_Success = '[Auth] Authentication Success',
  Authentication_Fail = '[Auth] Authentication Fail',
}

export class RegisterUser implements Action {
  readonly type = AuthActionTypes.Register_User;
  constructor(public payload: RegistrationForm) {}
}

export class RegistrationSuccess implements Action {
  readonly type = AuthActionTypes.Registration_Success;
  constructor() {}
}

export class RegistrationFail implements Action {
  readonly type = AuthActionTypes.Registration_Fail;
  constructor(public payload: string) {}
}

export class LoginUser implements Action {
  readonly type = AuthActionTypes.Login_User;
  constructor(public payload: RegistrationForm) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.Login_Success;
  constructor() {}
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.Login_Fail;
  constructor(public payload: string) {}
}

export class AuthenticateUser implements Action {
  readonly type = AuthActionTypes.Authenticate_User;
  constructor(public payload: string) {}
}

export class AuthenticationSuccess implements Action {
  readonly type = AuthActionTypes.Authentication_Success;
  constructor() {}
}

export class AuthenticationFail implements Action {
  readonly type = AuthActionTypes.Authentication_Fail;
  constructor() {}
}

export type Action =
  | RegisterUser
  | RegistrationSuccess
  | RegistrationFail
  | LoginUser
  | LoginSuccess
  | LoginFail
  | AuthenticateUser
  | AuthenticationSuccess
  | AuthenticationFail;
