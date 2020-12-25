import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as userStore from './store/user.reducer';

import * as userActions from './store/user.action';
import { UserForm } from './store/user';
import { filter } from 'rxjs/operators';

@Injectable()
export class UserFacade {
  error$ = this.store.pipe(select(userStore.getError));
  UserInfo$ = this.store.pipe(select(userStore.getUserInfo));

  constructor(private store: Store<userStore.AppState>) {}

  getUserInfo() {
    this.store.dispatch(new userActions.GetUserInfo());
  }
}
