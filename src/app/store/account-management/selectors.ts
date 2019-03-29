import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';
import { State, adapter } from './state';
import { Dictionary } from '@ngrx/entity';
import { IAccount } from 'src/app/interfaces/IAccount';

const getTotalAccounts = (state: State): number => state.totalAccounts;
const getTotalPendingRequests = (state: State): number => state.totalPendingRequests;
const getTotalRequestsInProgress = (state: State): number => state.totalRequestsInProgress;

// get the selectors for the entity
const {
    // select the array of account ids
    selectIds,
    // select the dictionary of account entities
    selectEntities,
    // select the array of accounts
    selectAll,
    // select the total accounts count
    selectTotal
} = adapter.getSelectors();

export const selectAccountManagementState: MemoizedSelector<
    object,
    State
> = createFeatureSelector<State>('accountManagement');

export const selectTotalAccounts: MemoizedSelector<
    object,
    number
> = createSelector(
    selectAccountManagementState,
    getTotalAccounts
);

export const selectTotalPendingRequests: MemoizedSelector<
    object,
    number
> = createSelector(
    selectAccountManagementState,
    getTotalPendingRequests
);

export const selectTotalRequestsInProgress: MemoizedSelector<
    object,
    number
> = createSelector(
    selectAccountManagementState,
    getTotalRequestsInProgress
);

export const selectAccountIds: MemoizedSelector<
    object,
    string[] | number[]
> = createSelector(
    selectAccountManagementState,
    selectIds
);

export const selectAccountsDictionary: MemoizedSelector<
    object,
    Dictionary<IAccount>
> = createSelector(
    selectAccountManagementState,
    selectEntities
);

export const selectAccounts: MemoizedSelector<
    object,
    Array<IAccount>
> = createSelector(
    selectAccountManagementState,
    selectAll
);

export const selectAccountsCount: MemoizedSelector<
    object,
    number
> = createSelector(
    selectAccountManagementState,
    selectTotal
);

