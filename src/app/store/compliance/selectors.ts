import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';
import { State, adapter } from './state';
import { Dictionary } from '@ngrx/entity';
import { IComplianceOverview } from './interfaces';
import { ITransactionQueryResults } from 'src/app/interfaces/ITransaction';

const getComplianceOverview = (state: State): IComplianceOverview => state.complianceOverview;
const getAverageTransactions = (state: State): number => state.averageTransactions;
const getAverageUsage = (state: State): number => state.averageUsage;
const getMostUsedType = (state: State): string => state.mostUsedType;

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

export const selectComplianceState: MemoizedSelector<
    object,
    State
> = createFeatureSelector<State>('compliance');

export const selectComplianceOverview: MemoizedSelector<
    object,
    IComplianceOverview
> = createSelector(
    selectComplianceState,
    getComplianceOverview
);

export const selectAverageTransactions: MemoizedSelector<
    object,
    number
> = createSelector(
    selectComplianceState,
    getAverageTransactions
);

export const selectAverageUsage: MemoizedSelector<
    object,
    number
> = createSelector(
    selectComplianceState,
    getAverageUsage
);

export const selectMostUsedType: MemoizedSelector<
    object,
    string
> = createSelector(
    selectComplianceState,
    getMostUsedType
);

export const selectTransactionQueryResultsIds: MemoizedSelector<
    object,
    string[] | number[]
> = createSelector(
    selectComplianceState,
    selectIds
);

export const selectTransactionQueryResultsDictionary: MemoizedSelector<
    object,
    Dictionary<ITransactionQueryResults>
> = createSelector(
    selectComplianceState,
    selectEntities
);

export const selectTransactionQueryResults: MemoizedSelector<
    object,
    Array<ITransactionQueryResults>
> = createSelector(
    selectComplianceState,
    selectAll
);

export const selectTransactionQueryResultsCount: MemoizedSelector<
    object,
    number
> = createSelector(
    selectComplianceState,
    selectTotal
);

