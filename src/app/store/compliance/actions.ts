import { Action } from '@ngrx/store';
import { IComplianceOverview } from './interfaces';
import { IPeriod } from 'src/app/interfaces/IPeriod';

export enum ComplianceActionTypes {
    GetTransactionQueryResults = '[Compliance] GetTransactionQueryResults',
    GetTransactionQueryResultsSuccess = '[Compliance] GetTransactionQueryResultsSuccess',
    GetTransactionQueryResultsFailure = '[Compliance] GetTransactionQueryResultsFailure',
    GetComlianceOverview = '[Compliance] GetComlianceOverview',
    GetComlianceOverviewSuccess = '[Compliance] GetComlianceOverviewSuccess',
    GetComlianceOverviewFailure = '[Compliance] GetComlianceOverviewFailure'
}

export class GetTransactionQueryResults implements Action {
    readonly type = ComplianceActionTypes.GetTransactionQueryResults;
    constructor(public payload: any) { }
}
export class GetTransactionQueryResultsSuccess implements Action {
    readonly type = ComplianceActionTypes.GetTransactionQueryResultsSuccess;
    constructor(public payload: any) { }
}
export class GetTransactionQueryResultsFailure implements Action {
    readonly type = ComplianceActionTypes.GetTransactionQueryResultsFailure;
    constructor(public payload: any) { }
}

export class GetComlianceOverview implements Action {
    readonly type = ComplianceActionTypes.GetComlianceOverview;
    constructor(public payload: IPeriod) { }
}
export class GetComlianceOverviewSuccess implements Action {
    readonly type = ComplianceActionTypes.GetComlianceOverviewSuccess;
    constructor(public payload: IComplianceOverview) { }
}
export class GetComlianceOverviewFailure implements Action {
    readonly type = ComplianceActionTypes.GetComlianceOverviewFailure;
    constructor(public payload: any) { }
}

export type ComplianceActions = GetTransactionQueryResults
    | GetTransactionQueryResultsSuccess
    | GetTransactionQueryResultsFailure
    | GetComlianceOverview
    | GetComlianceOverviewSuccess
    | GetComlianceOverviewFailure;
