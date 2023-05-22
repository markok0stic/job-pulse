import { createReducer, on } from '@ngrx/store';
import * as CustomerActions from './customer.actions';
import { CustomerState } from "./customer.state";

export const initialState: CustomerState = {
  isLoading:false,
  customer:null,
  accessToken:null,
  error:null
};

export const reducers = createReducer(
  initialState,
  on(CustomerActions.loginCustomer, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(CustomerActions.logoutCustomer, () => ({
    customer: null,
    accessToken: null,
    isLoading: false,
    error: null
  })),
  on(CustomerActions.loginSuccess, (state, { data }) => ({
    customer: data.customer,
    accessToken: data.accessToken,
    isLoading: false,
    error: null
  })),
  on(CustomerActions.loginFailure, () => ({
    customer: null,
    accessToken: null,
    isLoading: false,
    error: null
  })),
  on(CustomerActions.registerSuccess, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(CustomerActions.registerSuccess, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(CustomerActions.registerFailure, (state) => ({
    ...state,
    isLoading: false,
  }))
);
