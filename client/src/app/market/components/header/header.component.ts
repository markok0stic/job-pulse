import {Component, HostListener, Input, OnInit} from '@angular/core';
import {User} from "../../../users/types/user";
import {Observable} from "rxjs";
import {AppState} from "../../../app.state";
import {select, Store} from "@ngrx/store";
import {loginIsToggled, registerIsToggled} from "../../../shared/store/shared.selectors";
import { overlayClick, toggleLogin, toggleRegister } from 'src/app/shared/store/shared.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isAuthPage: boolean = false;
  @Input() user: User | null = null;
  showLogin$: Observable<boolean>;
  showRegister$: Observable<boolean>;
  isHeaderSticky: boolean = false;

  constructor(private store: Store<AppState>) {
    this.showLogin$ = this.store.pipe(select(loginIsToggled));
    this.showRegister$ = this.store.pipe(select(registerIsToggled));
  }
  ngOnInit(): void {
  }

  toggleLogin(): void {
    this.store.dispatch(toggleLogin());
  }

  toggleRegister(): void {
    this.store.dispatch(toggleRegister());
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderSticky = window.pageYOffset > 0;
  }
}
