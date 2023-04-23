import { createAction, props } from '@ngrx/store';
import {Customer, LoginCustomer, RegisterCustomer} from "../models/customer";

export const loginCustomer = createAction('[Customer] Login Customer',
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction('[Customer] Login Success',
  props<{ data: LoginCustomer }>()
);
export const loginFailure = createAction('[Customer] Login Failure',
  props<{ error: string }>()
);
export const logoutCustomer = createAction('[Customer] Logout Customer');
export const registerCustomer = createAction('[Customer] Register Customer',
  props<{ registerData: RegisterCustomer }>()
);
export const registerSuccess = createAction('[Customer] Register Success');
export const registerFailure = createAction('[Customer] Register Failure');
export const editProfile = createAction('[Customer] Edit Profile',
  props<{ userData: FormData }>()
);
export const editProfileSuccess = createAction('[Customer] Edit Profile Success',
  props<{ user: Customer }>()
);

