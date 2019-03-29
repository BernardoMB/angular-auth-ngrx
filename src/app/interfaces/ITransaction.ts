export interface ITransactionQueryResults {
    group: number;
    type: string;
    region: string;
    startDate: Date;
    endDate: Date;
    usage: number;
    gender: string;
    averageTransactions: number;
    productsUser: Array<string>;
}