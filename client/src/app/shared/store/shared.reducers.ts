import {SharedState} from "./shared.state";
import {createReducer, on} from "@ngrx/store";
import * as SharedActions from "./shared.actions";

export const initialState: SharedState = {
  showLogin: false,
  showRegister: false
};

export const reducers = createReducer(
  initialState,
  on(SharedActions.toggleLogin, (state) => ({...state, showLogin: !state.showLogin,
    showRegister: false
  })),
  on(SharedActions.toggleRegister, (state) => ({ ...state, showRegister: !state.showRegister,
    showLogin: false
  })),
  on(SharedActions.overlayClick, (state) => ({...state, showLogin: false, showRegister: false})),
  on(SharedActions.escapeClick, (state) => ({...state, showLogin: false, showRegister: false}))
)
