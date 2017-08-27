import { Action } from '@ngrx/store';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class Signup implements Action {
  readonly type = SIGNUP;
  // constructor(public payload: {
  //   email: string,
  //   password: string
  // }) {}
}

export class Login implements Action {
  readonly type = LOGIN;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}

export type AuthActions = Signup | Login | Logout | SetToken;
