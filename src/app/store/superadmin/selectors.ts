import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';
import { State, adminAdapter, activityAdapter } from './state';
import { Dictionary } from '@ngrx/entity';
import { IAdmin } from 'src/app/interfaces/IAdmin';
import { IActivity } from 'src/app/interfaces/IActivity';

const adminSelectIds = adminAdapter.getSelectors().selectIds;
const adminSelectEntities = adminAdapter.getSelectors().selectEntities;
const adminSelectAll = adminAdapter.getSelectors().selectAll;
const adminSelectTotal = adminAdapter.getSelectors().selectTotal;

const activitySelectIds = activityAdapter.getSelectors().selectIds;
const activitySelectEntities = activityAdapter.getSelectors().selectEntities;
const activitySelectAll = activityAdapter.getSelectors().selectAll;
const activitySelectTotal = activityAdapter.getSelectors().selectTotal;

export const selectSuperadminState: MemoizedSelector<
    object,
    State
> = createFeatureSelector<State>('superadmin');

export const selectAdminState = (state: State) => state.admins;

export const selectActivityState = (state: State) => state.activites;

export const selectAdminIds: MemoizedSelector<
    object,
    string[] | number[]
> = createSelector(
    selectAdminState,
    adminSelectIds
);

export const selectAdminDictionary: MemoizedSelector<
    object,
    Dictionary<IAdmin>
> = createSelector(
    selectAdminState,
    adminSelectEntities
);

export const selectAdminResults: MemoizedSelector<
    object,
    Array<IAdmin>
> = createSelector(
    selectAdminState,
    adminSelectAll
);

export const selectAdminCount: MemoizedSelector<
    object,
    number
> = createSelector(
    selectAdminState,
    adminSelectTotal
);

export const selectActivityIds: MemoizedSelector<
    object,
    string[] | number[]
> = createSelector(
    selectActivityState,
    activitySelectIds
);

export const selectActivityDictionary: MemoizedSelector<
    object,
    Dictionary<IActivity>
> = createSelector(
    selectActivityState,
    activitySelectEntities
);

export const selectActivityResults: MemoizedSelector<
    object,
    Array<IActivity>
> = createSelector(
    selectActivityState,
    activitySelectAll
);

export const selectActivityCount: MemoizedSelector<
    object,
    number
> = createSelector(
    selectActivityState,
    activitySelectTotal
);
