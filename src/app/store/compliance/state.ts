import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { IComplianceOverview } from './interfaces';
import { ITransactionQueryResults } from 'src/app/interfaces/ITransaction';

export const adapter: EntityAdapter<ITransactionQueryResults> = createEntityAdapter<ITransactionQueryResults>();

export interface State extends EntityState<ITransactionQueryResults> {
    complianceOverview: IComplianceOverview;
    averageTransactions: number;
    averageUsage: number;
    mostUsedType: string;
}

export const initialState: State = adapter.getInitialState({
    complianceOverview: undefined,
    averageTransactions: undefined,
    averageUsage: undefined,
    mostUsedType: undefined
});
