import {createAction} from '@ngrx/store';

export const toggleLogin = createAction('[Login] Toggle Login');

export const toggleRegister = createAction('[Register] Toggle Register');

export const overlayClick = createAction('[Overlay] Click');
export const escapeClick = createAction('[Escape] Click');
