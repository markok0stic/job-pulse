import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {User} from "../../../users/types/user";
import {selectUser} from "../../../users/store/user.selector";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isAuthPage: boolean = false;
  user$: Observable<User | null>;
  constructor(private router: Router, private store: Store<AppState>) {
    this.user$ = this.store.pipe(select(selectUser));
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.snapshot.url;
        this.isAuthPage = !(currentRoute === '/login' || currentRoute === '/register');
      }
    });
  }
}
