import { createAction, props } from '@ngrx/store';
import { LoginUser, RegisterUser, User } from '..user';

export const loginUser = createAction('[User Api] Login User',
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction('[User Api] Login Success',
  props<{ data: LoginUser }>()
);
export const loginFailure = createAction('[User Api] Login Failure',
  props<{ error: string }>()
);
export const logoutUser = createAction('[User Api] Logout User');
export const registerUser = createAction('[User Api] Register User',
  props<{ registerData: RegisterUser }>()
);
export const registerSuccess = createAction('[User Api] Register Success');
export const registerFailure = createAction('[User Api] Register Failure');
export const editProfile = createAction('[User Api] Edit Profile',
  props<{ userData: FormData }>()
);
export const editProfileSuccess = createAction('[User Api] Edit Profile Success',
  props<{ user: User }>()
);

