import { IPeriod } from 'src/app/interfaces/IPeriod';

export interface ITotalWallets { period: IPeriod; value: number; change: number; }
export interface ITotalWalletsBalance { period: IPeriod; value: number; change: number; }
export interface ITotalWalletsBalanceOnPeriod { period: IPeriod; value: number; change: number; }
export interface ITotalFees { period: IPeriod; value: number; change: number; values: Array<number>; }
export interface ITotalAccountHolders { value: number; countries: Array<{ country: string, total: number, percentaje: number }>; }
export interface ITotalTransactions { period: IPeriod; value: number; change: number; values: Array<number>; type: number; }
export interface ITotalTransactionsValue { period: IPeriod; value: number; change: number; values: Array<number>; type: number; }
