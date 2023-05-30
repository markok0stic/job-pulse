import {CoreState} from "./core.state";
import {createReducer, on} from "@ngrx/store";
import * as MarketActions from "./core.actions";
import {state} from "@angular/animations";

export const initialState: CoreState = {
  showLogin: false,
  showRegister: false
};

export const reducers = createReducer(
  initialState,
  on(MarketActions.toggleLogin, (state) => ({...state, showLogin: !state.showLogin})),
  on(MarketActions.toggleRegister, (state) => ({ ...state, showRegister: !state.showRegister })),
  on(MarketActions.overlayClick, (state)=> ({...state, showLogin: false, showRegister: false}))
);
