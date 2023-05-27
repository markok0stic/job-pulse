import {MarketState} from "./market.state";
import {createReducer, on} from "@ngrx/store";
import * as MarketActions from "./market.actions";

export const initialState: MarketState = {
  showLogin: false,
  showRegister: false
};

export const reducers = createReducer(
  initialState,
  on(MarketActions.toggleLogin, (state) => ({...state, showLogin: !state.showLogin})),
  on(MarketActions.toggleRegister, (state) => ({ ...state, showRegister: !state.showRegister }))
);
