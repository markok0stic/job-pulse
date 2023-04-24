import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { ShowsService } from "../services/shows.service";
import * as ShowsActions from './show.actions';
import {catchError, of} from "rxjs";

@Injectable()
export class ShowEffects {
  getShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShowsActions.getShows),
      mergeMap(() =>
        this.showsService.getShows().pipe(
          map((shows) => ShowsActions.getShowsSuccess({ shows })),
          catchError((err)=> of(ShowsActions.getShowsFailure({error: err.message})))
        )
      )
    )
  );

  constructor(private actions$: Actions, private showsService: ShowsService) {}
}
