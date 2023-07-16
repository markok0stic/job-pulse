import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../app.state";
import {registerIsToggled} from "../../store/shared.selectors";
import { overlayClick } from '../../store/shared.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() isAuthPage: boolean = false;
  showRegister$: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    this.showRegister$ = this.store.pipe(select(registerIsToggled));
  }
  overlayClick(): void {
    this.store.dispatch(overlayClick());
  }
}
