import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    LogIn = '[Auth] LogIn',
    LogInSuccess = '[Auth] LogInSuccess',
    LogInFailure = '[Auth] LogInFailure',
    SignUp = '[Auth] SignUp',
    SignUpSuccess = '[Auth] SignUpSuccess',
    SignUpFailure = '[Auth] SignUpFailure',
    LogOut = '[Auth] LogOut',
    LogOutSuccess = '[Auth] LogOutSuccess',
    LogOutFailure = '[Auth] LogOutFailure',
    GetStatus = '[Auth] GetStatus'
}

export class LogIn implements Action {
    readonly type = AuthActionTypes.LogIn;
    constructor(public payload: { email: string, password: string }) { }
}
export class LogInSuccess implements Action {
    readonly type = AuthActionTypes.LogInSuccess;
    constructor(public payload: { token: string, email: string }) { }
}
export class LogInFailure implements Action {
    readonly type = AuthActionTypes.LogInFailure;
    constructor(public payload: { error: any }) { }
}

export class SignUp implements Action {
    readonly type = AuthActionTypes.SignUp;

    constructor(public payload: any) { }
}
export class SignUpSuccess implements Action {
    readonly type = AuthActionTypes.SignUpSuccess;

    constructor(public payload: any) { }
}
export class SignUpFailure implements Action {
    readonly type = AuthActionTypes.SignUpFailure;

    constructor(public payload: any) { }
}

export class LogOut implements Action {
    readonly type = AuthActionTypes.LogOut;

    constructor(public payload: any) { }
}
export class LogOutSuccess implements Action {
    readonly type = AuthActionTypes.LogOutSuccess;

    constructor(public payload: any) { }
}
export class LogOutFailure implements Action {
    readonly type = AuthActionTypes.LogOutFailure;

    constructor(public payload: any) { }
}

export class GetStatus implements Action {
    readonly type = AuthActionTypes.GetStatus;
    constructor(public payload: any) { }
}

export type Actions = LogIn
    | LogInSuccess
    | LogInFailure
    | SignUp
    | SignUpSuccess
    | SignUpFailure
    | LogOut
    | LogOutSuccess
    | LogOutFailure
    | GetStatus
    ;
