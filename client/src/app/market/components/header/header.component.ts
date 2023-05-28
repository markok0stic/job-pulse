import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../users/types/user";
import {Observable} from "rxjs";
import {AppState} from "../../../app.state";
import {select, Store} from "@ngrx/store";
import {loginIsToggled, registerIsToggled} from "../../store/market.selectors";
import {overlayClick, toggleLogin, toggleRegister} from "../../store/market.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() user: User | null = null;
  showLogin$: Observable<boolean>;
  showRegister$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.showLogin$ = this.store.pipe(select(loginIsToggled));
    this.showRegister$ = this.store.pipe(select(registerIsToggled));
  }
  ngOnInit(): void {
  }

  overlayClick(): void {
    this.store.dispatch(overlayClick());
  }

  toggleLogin(): void {
    this.store.dispatch(toggleLogin());
  }

  toggleRegister(): void {
    this.store.dispatch(toggleRegister());
  }
}
