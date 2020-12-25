import { Injectable } from '@angular/core';
import * as authActions from '../../authentication/Store/auth.action';

import { map, catchError, filter } from 'rxjs/operators';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserTokens } from '../Store/auth';
import { select, Store } from '@ngrx/store';
import * as auth from '../Store/auth.reducer';

@Injectable({
  providedIn: 'root',
})
export class Guard implements CanActivate {
  routeURL: string;
  constructor(private store: Store<auth.AppState>, private router: Router) {
    this.routeURL = this.router.url;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    try {
      this.getToken().subscribe(
        (res) => {
          this.store.dispatch(new authActions.AuthenticateUser(res.token));
        },
        (error) => {
          this.router.navigate(['/login']).then();
        }
      );
    } catch (ex) {
      this.router.navigate(['/login']).then();
    }
    return this.store.pipe(
      select(auth.getAuthStatus),
      filter((val) => val !== undefined),
      map((auth) => {
        if (!auth) {
          this.router.navigate(['/login']).then();
          return false;
        } else if (auth) {
          return true;
        }
      })
    );
  }

  getToken(): Observable<UserTokens> {
    try {
      const token = localStorage.getItem('token');
      const refreshToken = localStorage.getItem('R_token');
      if (
        token === null ||
        refreshToken === null ||
        token === ' ' ||
        refreshToken === ' '
      ) {
        throw new Error();
      } else {
        const userTokens: UserTokens = {
          token,
          refreshToken,
        };
        return of(userTokens);
      }
    } catch (ex) {
      throw new Error();
    }
  }
}
