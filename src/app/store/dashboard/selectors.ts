import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { State } from './state';
import {
    ITotalWallets,
    ITotalWalletsBalance,
    ITotalWalletsBalanceOnPeriod,
    ITotalFees, ITotalAccountHolders,
    ITotalTransactions,
    ITotalTransactionsValue
} from './interfaces';

const getTotalWallets = (state: State): ITotalWallets => state.totalWallets;
const getTotalWalletsBalance = (state: State): ITotalWalletsBalance => state.totalWalletsBalance;
const getTotalWalletsBalanceOnPeriod = (state: State): ITotalWalletsBalanceOnPeriod => state.totalWalletsBalanceOnPeriod;
const getTotalFees = (state: State): ITotalFees => state.totalFees;
const getTotalAccountHolders = (state: State): ITotalAccountHolders => state.totalAccountHolders;
const getTotalTransactions = (state: State): ITotalTransactions => state.totalTransactions;
const getTotalTransactionsValue = (state: State): ITotalTransactionsValue => state.totalTransactionsValue;

export const selectDashoardState: MemoizedSelector<
    object,
    State
> = createFeatureSelector<State>('dashboard');

export const selectTotalWallets: MemoizedSelector<
    object,
    ITotalWallets
> = createSelector(
    selectDashoardState,
    getTotalWallets
);

export const selectTotalWalletsBalance: MemoizedSelector<
    object,
    ITotalWalletsBalance
> = createSelector(
    selectDashoardState,
    getTotalWalletsBalance
);

export const selectTotalWalletsBalanceOnPeriod: MemoizedSelector<
    object,
    ITotalWalletsBalanceOnPeriod
> = createSelector(
    selectDashoardState,
    getTotalWalletsBalanceOnPeriod
);

export const selectTotalFees: MemoizedSelector<
    object,
    ITotalFees
> = createSelector(
    selectDashoardState,
    getTotalFees
);

export const selectTotalAccountHolders: MemoizedSelector<
    object,
    ITotalAccountHolders
> = createSelector(
    selectDashoardState,
    getTotalAccountHolders
);

export const selectTotalTransactions: MemoizedSelector<
    object,
    ITotalTransactions
> = createSelector(
    selectDashoardState,
    getTotalTransactions
);

export const selectTotalTransactionsValue: MemoizedSelector<
    object,
    ITotalTransactionsValue
> = createSelector(
    selectDashoardState,
    getTotalTransactionsValue
);
