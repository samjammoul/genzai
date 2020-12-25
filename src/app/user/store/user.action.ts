// @ts-ignore
import { Action } from '@ngrx/store';
export enum UserActionTypes {
  Get_User_information = '[User] get User information',
  Get_User_information_Success = '[User] get User information Success',
  Get_User_information_Fail = '[User] get User information Fail',
  Update_User_information = '[User] update User information',
  Update_User_information_Success = '[User] update User information Success',
  Update_User_information_Fail = '[User] update User information Fail',
}
export class UpdateUserInfo implements Action {
  readonly type = UserActionTypes.Update_User_information;
  constructor() {}
}

export class UpdateUserInfoSuccess implements Action {
  readonly type = UserActionTypes.Update_User_information_Success;
  constructor() {}
}
export class UpdateUserInfoFail implements Action {
  readonly type = UserActionTypes.Update_User_information_Fail;
  constructor() {}
}

export class GetUserInfo implements Action {
  readonly type = UserActionTypes.Get_User_information;
  constructor() {}
}

export class GetUserInfoSuccess implements Action {
  readonly type = UserActionTypes.Get_User_information_Success;
  constructor() {}
}

export class GetUserInfoFail implements Action {
  readonly type = UserActionTypes.Get_User_information_Fail;
  constructor() {}
}

export type Action =
  | UpdateUserInfo
  | GetUserInfo
  | UpdateUserInfoSuccess
  | UpdateUserInfoFail
  | GetUserInfoSuccess
  | GetUserInfoFail;
