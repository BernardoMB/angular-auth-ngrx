import {
    ITotalWallets,
    ITotalWalletsBalance,
    ITotalWalletsBalanceOnPeriod,
    ITotalFees,
    ITotalAccountHolders,
    ITotalTransactions,
    ITotalTransactionsValue
} from './interfaces';

export interface State {
    totalWallets: ITotalWallets;
    totalWalletsBalance: ITotalWalletsBalance;
    totalWalletsBalanceOnPeriod: ITotalWalletsBalanceOnPeriod;
    totalFees: ITotalFees;
    totalAccountHolders: ITotalAccountHolders;
    totalTransactions: ITotalTransactions;
    totalTransactionsValue: ITotalTransactionsValue;
}

export const initialState: State = {
    totalWallets: undefined,
    totalWalletsBalance: undefined,
    totalWalletsBalanceOnPeriod: undefined,
    totalFees: undefined,
    totalAccountHolders: undefined,
    totalTransactions: undefined,
    totalTransactionsValue: undefined
};
