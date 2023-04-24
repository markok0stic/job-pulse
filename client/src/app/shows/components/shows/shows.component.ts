import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as ShowActions from '../../store/show.actions'
import {errorSelector, isLoadingSelector, showsSelector} from "../../store/show.selectors";
import {Observable} from "rxjs";
import {AppState} from "../../../app.state";
import {Show} from "../../models/show";
@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  shows$: Observable<Show[]>;
  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.shows$ = this.store.pipe(select(showsSelector));
  }
  ngOnInit(): void {
    this.store.dispatch(ShowActions.getShows())
  }

}
