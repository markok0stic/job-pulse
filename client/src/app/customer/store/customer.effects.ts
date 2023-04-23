import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import * as UserActions from './customer.actions';

@Injectable()
export class CustomerEffects {
  constructor(
    private action$: Actions,
    private userService: CustomerService,
    private router: Router
  ) {}

  /*loginUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.loginCustomer),
      mergeMap(({ email, password }) =>
        this.userService.login(email, password).pipe(
          map((data: LoginUser) => {
            setToken(data.access_token);
            setUser(data.user);
            this.router.navigate(['home'], { replaceUrl: true });
            return UserActions.loginSuccess({ data });
          }),
          catchError(({ error }) => {
            setToken(null);
            setUser(null);
            return of(UserActions.loginFailure({ error: 'BadCredentials' }));
          })
        )
      )
    )
  );

  logoutUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.logoutCustomer),
      mergeMap(()=>{
        setToken(null);
        setUser(null);
        this.router.navigate(['login'], { replaceUrl: true });
        return of({ type: 'logged out' });
      })
    ));

  registerUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.registerCustomer),
      mergeMap(({ registerData }) =>
        this.userService.register(registerData).pipe(
          map(() => {
            this.router.navigate(['login'], { replaceUrl: true });
            return UserActions.registerSuccess();
          }),
          catchError(({ error }) => {
            return of(UserActions.registerFailure());
          })
        )
      )
    )
  );

  editProfile$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.editProfile),
      mergeMap(({ userData }) =>
        this.userService.editProfile(userData).pipe(
          map((user: User) => {
            setUser(user);
            return UserActions.editProfileSuccess({ user: user });
          }),
          catchError(({ error }) => {
            return of({ type: error });
          })
        )
      )
    )
  );*/
}
