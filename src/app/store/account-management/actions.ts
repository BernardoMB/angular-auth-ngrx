import { Action } from '@ngrx/store';

export enum AccountManagementActionTypes {
    GetTotalAccounts = '[Account Management] GetTotalAccounts',
    GetTotalAccountsSuccess = '[Account Management] GetTotalAccountsSuccess',
    GetTotalAccountsFailure = '[Account Management] GetTotalAccountsFailure',
    GetTotalPendingRequests = '[Account Management] GetTotalPendingRequests',
    GetTotalPendingRequestsSuccess = '[Account Management] GetTotalPendingRequestsSuccess',
    GetTotalPendingRequestsFailure = '[Account Management] GetTotalPendingRequestsFailure',
    GetTotalRequestsInProgress = '[Account Management] GetTotalRequestsInProgress',
    GetTotalRequestsInProgressSuccess = '[Account Management] GetTotalRequestsInProgressSuccess',
    GetTotalRequestsInProgressFailure = '[Account Management] GetTotalRequestsInProgressFailure',
    GetAccounts = '[Account Management] Get Accounts',
    GetAccountsSuccess = '[Account Management] Get AccountsSuccess',
    GetAccountsFailure = '[Account Management] Get AccountsFailure'
}

export class GetTotalAccounts implements Action {
    readonly type = AccountManagementActionTypes.GetTotalAccounts;

    constructor() { }
}
export class GetTotalAccountsSuccess implements Action {
    readonly type = AccountManagementActionTypes.GetTotalAccountsSuccess;

    constructor(public payload: any) { }
}
export class GetTotalAccountsFailure implements Action {
    readonly type = AccountManagementActionTypes.GetTotalAccountsFailure;

    constructor(public payload: any) { }
}

export class GetTotalPendingRequests implements Action {
    readonly type = AccountManagementActionTypes.GetTotalPendingRequests;

    constructor() { }
}
export class GetTotalPendingRequestsSuccess implements Action {
    readonly type = AccountManagementActionTypes.GetTotalPendingRequestsSuccess;

    constructor(public payload: any) { }
}
export class GetTotalPendingRequestsFailure implements Action {
    readonly type = AccountManagementActionTypes.GetTotalPendingRequestsFailure;

    constructor(public payload: any) { }
}

export class GetTotalRequestsInProgress implements Action {
    readonly type = AccountManagementActionTypes.GetTotalRequestsInProgress;

    constructor() { }
}
export class GetTotalRequestsInProgressSuccess implements Action {
    readonly type = AccountManagementActionTypes.GetTotalRequestsInProgressSuccess;

    constructor(public payload: any) { }
}
export class GetTotalRequestsInProgressFailure implements Action {
    readonly type = AccountManagementActionTypes.GetTotalRequestsInProgressFailure;

    constructor(public payload: any) { }
}

export class GetAccounts implements Action {
    readonly type = AccountManagementActionTypes.GetAccounts;

    constructor(public payload: any) { }
}
export class GetAccountsSuccess implements Action {
    readonly type = AccountManagementActionTypes.GetAccountsSuccess;

    constructor(public payload: any) { }
}
export class GetAccountsFailure implements Action {
    readonly type = AccountManagementActionTypes.GetAccountsFailure;

    constructor(public payload: any) { }
}

export type AccountManagementActions
    = GetTotalAccounts
    | GetTotalAccountsSuccess
    | GetTotalAccountsFailure
    | GetTotalPendingRequests
    | GetTotalPendingRequestsSuccess
    | GetTotalPendingRequestsFailure
    | GetTotalRequestsInProgress
    | GetTotalRequestsInProgressSuccess
    | GetTotalRequestsInProgressFailure
    | GetAccounts
    | GetAccountsSuccess
    | GetAccountsFailure
    ;
