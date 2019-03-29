import { Action } from '@ngrx/store';
import { IPeriod } from 'src/app/interfaces/IPeriod';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum DashboardActionTypes {
    GetTotalWallets = '[Dashboard] GetTotalWallets',
    GetTotalWalletsSuccess = '[Dashboard] GetTotalWalletsSuccess',
    GetTotalWalletsFailure = '[Dashboard] GetTotalWalletsFailure',
    GetTotalWalletsBalance = '[Dashboard] GetTotalWalletsBalance',
    GetTotalWalletsBalanceSuccess = '[Dashboard] GetTotalWalletsBalanceSuccess',
    GetTotalWalletsBalanceFailure = '[Dashboard] GetTotalWalletsBalanceFailure;',
    GetTotalWalletsBalanceOnPeriod = '[Dashboard] GetTotalWalletsBalanceOnPeriod',
    GetTotalWalletsBalanceOnPeriodSuccess = '[Dashboard] GetTotalWalletsBalanceOnPeriodSuccess',
    GetTotalWalletsBalanceOnPeriodFailure = '[Dashboard] GetTotalWalletsBalanceOnPeriodFailure',
    GetTotalFees = '[Dashboard] GetTotalFees',
    GetTotalFeesSuccess = '[Dashboard] GetTotalFeesSuccess',
    GetTotalFeesFailure = '[Dashboard] GetTotalFeesFailure',
    GetTotalAccountHolders = '[Dashboard] GetTotalAccountHolders',
    GetTotalAccountHoldersSuccess = '[Dashboard] GetTotalAccountHoldersSuccess',
    GetTotalAccountHoldersFailure = '[Dashboard] GetTotalAccountHoldersFailure',
    GetTransactionCount = '[Dashboard] GetTransactionCount',
    GetTransactionCountSuccess = '[Dashboard] GetTransactionCountSuccess',
    GetTransactionCountFailure = '[Dashboard] GetTransactionCountFailure',
    GetTransactionValue = '[Dashboard] GetTransactionValue',
    GetTransactionValueSuccess = '[Dashboard] GetTransactionValueSuccess',
    GetTransactionValueFailure = '[Dashboard] GetTransactionValueFailure'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class GetTotalWallets implements Action {
    readonly type = DashboardActionTypes.GetTotalWallets;

    constructor(public payload: IPeriod) { }
}

export class GetTotalWalletsSuccess implements Action {
    readonly type = DashboardActionTypes.GetTotalWalletsSuccess;

    constructor(public payload: { value: number, change: number }) { }
}

export class GetTotalWalletsFailure implements Action {
    readonly type = DashboardActionTypes.GetTotalWalletsFailure;

    constructor(public payload: any) { }
}

export class GetTotalWalletsBalance implements Action {
    readonly type = DashboardActionTypes.GetTotalWalletsBalance;

    constructor(public payload: IPeriod) { }
}

export class GetTotalWalletsBalanceSuccess implements Action {
    readonly type = DashboardActionTypes.GetTotalWalletsBalanceSuccess;

    constructor(public payload: { value: number, change: number }) { }
}

export class GetTotalWalletsBalanceFailure implements Action {
    readonly type = DashboardActionTypes.GetTotalWalletsBalanceFailure;

    constructor(public payload: any) { }
}

export class GetTotalWalletsBalanceOnPeriod implements Action {
    readonly type = DashboardActionTypes.GetTotalWalletsBalanceOnPeriod;

    constructor(public payload: IPeriod) { }
}

export class GetTotalWalletsBalanceOnPeriodSuccess implements Action {
    readonly type = DashboardActionTypes.GetTotalWalletsBalanceOnPeriodSuccess;

    constructor(public payload: { value: number, change: number }) { }
}

export class GetTotalWalletsBalanceOnPeriodFailure implements Action {
    readonly type = DashboardActionTypes.GetTotalWalletsBalanceOnPeriodFailure;

    constructor(public payload: any) { }
}

export class GetTotalFees implements Action {
    readonly type = DashboardActionTypes.GetTotalFees;

    constructor(public payload: IPeriod) { }
}

export class GetTotalFeesSuccess implements Action {
    readonly type = DashboardActionTypes.GetTotalFeesSuccess;

    constructor(public payload: { value: number, change: number, values: Array<number> }) { }
}

export class GetTotalFeesFailure implements Action {
    readonly type = DashboardActionTypes.GetTotalFeesFailure;

    constructor(public payload: any) { }
}

export class GetTotalAccountHolders implements Action {
    readonly type = DashboardActionTypes.GetTotalAccountHolders;

    constructor(public payload: any) { }
}

export class GetTotalAccountHoldersSuccess implements Action {
    readonly type = DashboardActionTypes.GetTotalAccountHoldersSuccess;

    constructor(public payload: { value: number, countries: Array<{ country: string, total: number, percentaje: number }> }) { }
}

export class GetTotalAccountHoldersFailure implements Action {
    readonly type = DashboardActionTypes.GetTotalAccountHoldersFailure;

    constructor(public payload: any) { }
}

export class
    GetTransactionCount implements Action {
    readonly type = DashboardActionTypes.GetTransactionCount;

    constructor(public payload: { type: number, period: IPeriod }) { }
}

export class GetTransactionCountSuccess implements Action {
    readonly type = DashboardActionTypes.GetTransactionCountSuccess;

    constructor(public payload: { value: number, change: number, values: Array<number> }) { }
}

export class GetTransactionCountFailure implements Action {
    readonly type = DashboardActionTypes.GetTransactionCountFailure;

    constructor(public payload: any) { }
}

export class GetTransactionValue implements Action {
    readonly type = DashboardActionTypes.GetTransactionValue;

    constructor(public payload: { type: number, period: IPeriod }) { }
}

export class GetTransactionValueSuccess implements Action {
    readonly type = DashboardActionTypes.GetTransactionValueSuccess;

    constructor(public payload: { value: number, change: number, values: Array<number> }) { }
}

export class GetTransactionValueFailure implements Action {
    readonly type = DashboardActionTypes.GetTransactionValueFailure;

    constructor(public payload: any) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type DashboardActions
    = GetTotalWallets
    | GetTotalWalletsSuccess
    | GetTotalWalletsFailure
    | GetTotalWalletsBalance
    | GetTotalWalletsBalanceSuccess
    | GetTotalWalletsBalanceFailure
    | GetTotalWalletsBalanceOnPeriod
    | GetTotalWalletsBalanceOnPeriodSuccess
    | GetTotalWalletsBalanceOnPeriodFailure
    | GetTotalFees
    | GetTotalFeesSuccess
    | GetTotalFeesFailure
    | GetTotalAccountHolders
    | GetTotalAccountHoldersSuccess
    | GetTotalAccountHoldersFailure
    | GetTransactionCount
    | GetTransactionCountSuccess
    | GetTransactionCountFailure
    | GetTransactionValue
    | GetTransactionValueSuccess
    | GetTransactionValueFailure
    ;
