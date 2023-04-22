import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as ShowActions from '../../store/show.actions'
@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  constructor(private store:Store) {}
  ngOnInit(): void {
    this.store.dispatch(ShowActions.getShows())
  }

}
