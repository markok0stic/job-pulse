import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as ShowsActions from './show.actions'
import {map, mergeMap} from "rxjs";
import {ShowsService} from "../services/shows.service";
@Injectable()
export class ShowEffects {
  getShows$ =
    createEffect(() =>
      this.actions$.pipe(
        ofType(ShowsActions.getShows),
        mergeMap(()=> {
        return this.showsService
          .getShows()
          .pipe(map(shows=> ShowsActions.getShowsSuccess({ shows })));
        })
      )
    );

  constructor(private actions$: Actions, private showsService: ShowsService) {
  }
}
