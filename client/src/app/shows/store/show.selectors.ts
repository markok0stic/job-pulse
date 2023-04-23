import {AppState} from "../../app.state";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: AppState) =>
  state.shows;
export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading);
export const showsSelector = createSelector(
  selectFeature,
  (state) => state.shows);
export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error);
