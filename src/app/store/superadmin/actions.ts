import { Action } from '@ngrx/store';
import { IAdmin } from 'src/app/interfaces/IAdmin';
import { IActivity } from 'src/app/interfaces/IActivity';

export enum SuperadminActionTypes {
    GetAdmins = '[Superadmin] GetAdmins',
    GetAdminsSuccess = '[Superadmin] GetAdminsSuccess',
    GetAdminsFailure = '[Superadmin] GetAdminsFailure',
    GetActivities = '[Superadmin] GetActivities',
    GetActivitiesSuccess = '[Superadmin] GetActivitiesSuccess',
    GetActivitiesFailure = '[Superadmin] GetActivitiesFailure'
}

export class GetAdmins implements Action {
    readonly type = SuperadminActionTypes.GetAdmins;
    constructor() { }
}
export class GetAdminsSuccess implements Action {
    readonly type = SuperadminActionTypes.GetAdminsSuccess;
    constructor(public payload: { admins: Array<IAdmin> }) { }
}
export class GetAdminsFailure implements Action {
    readonly type = SuperadminActionTypes.GetAdminsFailure;
    constructor(public payload: any) { }
}

export class GetActivities implements Action {
    readonly type = SuperadminActionTypes.GetActivities;
    constructor() { }
}
export class GetActivitiesSuccess implements Action {
    readonly type = SuperadminActionTypes.GetActivitiesSuccess;
    constructor(public payload: { activities: Array<IActivity> }) { }
}
export class GetActivitiesFailure implements Action {
    readonly type = SuperadminActionTypes.GetActivitiesFailure;
    constructor(public payload: any) { }
}

export type SuperadminActions = GetAdmins
    | GetAdminsSuccess
    | GetAdminsFailure
    | GetActivities
    | GetActivitiesSuccess
    | GetActivitiesFailure
    ;
