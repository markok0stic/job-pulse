import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as ShowActions from '../../store/show.actions'
import {isLoadingSelector} from "../../store/show.selectors";
import {Observable} from "rxjs";
import {AppState} from "../../../app.state";
@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
  ngOnInit(): void {
    this.store.dispatch(ShowActions.getShows())
  }

}
