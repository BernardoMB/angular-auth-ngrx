import { Action } from '@ngrx/store';

export enum ActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure'
}

export class LoginAction implements Action {
    readonly type = ActionTypes.LOGIN;
    constructor(public payload: { email: string, password: string }) { }
}

export class LoginSuccessAction implements Action {
    readonly type = ActionTypes.LOGIN_SUCCESS;
    constructor(public payload: { token: string, email: string }) { }
}

export class LoginFailureAction implements Action {
    readonly type = ActionTypes.LOGIN_FAILURE;
    constructor(public payload: { error: any }) { }
}


export type Actions = LoginAction | LoginSuccessAction | LoginFailureAction;
