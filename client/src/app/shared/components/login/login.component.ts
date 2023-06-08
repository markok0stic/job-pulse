import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../app.state";
import {loginIsToggled} from "../../store/shared.selectors";
import { overlayClick} from '../../store/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showLogin$: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    this.showLogin$ = this.store.pipe(select(loginIsToggled));
  }
  overlayClick(): void {
    this.store.dispatch(overlayClick());
  }
}
