import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../app.state";
import {escapeClick} from "../../store/shared.actions";
@Component({
  selector: 'app-escape',
  templateUrl: './escape.component.html',
  styleUrls: ['./escape.component.css']
})
export class EscapeComponent {
  constructor(private store: Store<AppState>) {
  }
  escapeClick(): void {
    this.store.dispatch(escapeClick());
  }
}
