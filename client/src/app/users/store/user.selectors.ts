import {createSelector} from "@ngrx/store";
import {AppState} from "../../app.state";

export const selectFeature = (state: AppState) => state.users;
export const isLoadingSelector = createSelector(selectFeature,
  (state) => state.isLoading);
export const selectUser = createSelector(selectFeature,
  (state) => state.user);
