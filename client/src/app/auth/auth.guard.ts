import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";
import {Customer} from "../customer/models/customer";
import {getToken} from "./user-context";
import {Roles} from "../customer/enums/role";
import {AppState} from "../app.state";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private jwtHelper: JwtHelperService;

  constructor(private router: Router, private store: Store<AppState>) {
    this.jwtHelper = new JwtHelperService();
  }

  getUserFromStore(): Customer | null {
    let user: Customer | null = null;

    this.store.subscribe((state: AppState) => {
      user = state.userState.user;
    });
    return user;
  }

  canActivate(route: ActivatedRouteSnapshot):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token: string | null = getToken();
    const user: Customer | null = this.getUserFromStore();

    const authorizedRole = route.data['role'];

    if (token) {
      if (this.jwtHelper.isTokenExpired(token)) {
        this.router.navigate(['login']);
        return false;
      }

      if (!user) {
        this.router.navigate(['login']);
        return false;
      }

      if (authorizedRole !== user.role && user.role != Roles.Admin) {
        this.router.navigate(['login']);
        return false;
      }

      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
