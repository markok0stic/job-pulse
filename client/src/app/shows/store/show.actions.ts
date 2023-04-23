import {createAction, props} from "@ngrx/store";
import {Show} from "../models/show";

export const getShows = createAction(
  '[Shows] Get Shows'
);
export const getShowsSuccess = createAction(
  '[Shows] Get Shows Success',
  props<{ shows: Show[] }>()
);
export const getShowsFailure = createAction(
  '[Shows] Get Shows Failure',
  props<{ error: string }>()
);
