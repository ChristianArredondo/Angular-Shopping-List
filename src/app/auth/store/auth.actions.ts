import { Action } from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const TRY_LOGIN = 'TRY_LOGIN';
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignup implements Action {
  readonly type = TRY_SIGNUP;
  constructor (public payload: {username: string, password: string}) {}
}

export class TryLogin implements Action {
  readonly type = TRY_LOGIN;
  constructor (public payload: {email: string, password: string}) {}
}

export class Signup implements Action {
  readonly type = SIGNUP;
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

export type AuthActions = Signup | Login | Logout | SetToken | TrySignup;
