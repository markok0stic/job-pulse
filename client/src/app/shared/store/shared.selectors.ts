import {createSelector} from "@ngrx/store";
import {AppState} from "../../app.state";

export const selectFeature = (state: AppState) => state.shared;
export const loginIsToggled = createSelector(selectFeature,
  (state) => state.showLogin);
export const registerIsToggled = createSelector(selectFeature,
  (state) => state.showRegister);
