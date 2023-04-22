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
  on(ShowsActions.getShows, (state) => ({...state, isLoading:true}))
);
