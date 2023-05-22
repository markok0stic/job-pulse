import { createSelector } from "@ngrx/store";
import {AppState} from "../../app.state";

export const selectFeature = (state: AppState) => state.customer;
export const isLoadingSelector = createSelector(selectFeature,
  (state) => state.isLoading);
