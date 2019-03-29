import { IPeriod } from 'src/app/interfaces/IPeriod';

export interface IComplianceOverview {
    period: IPeriod;
    totalTransactions: number;
    totalLoadTransactions: number;
    totalSpendTransactions: number;
    totalTransactionsValue: number;
    totalNewUsers: number;
}