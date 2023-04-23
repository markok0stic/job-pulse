import {ShowState} from "./show.state";
import {createReducer, on} from "@ngrx/store";
import * as ShowsActions from './show.actions'
export const initialState: ShowState = {
  isLoading:false,
  shows:[],
  error:null
};

export const reducers = createReducer(
  initialState,
  on(ShowsActions.getShows, (state) => ({
    ...state,
    isLoading:true
  })),
  on(ShowsActions.getShowsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    shows: action.shows
  })),
  on(ShowsActions.getShowsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  }))
);
