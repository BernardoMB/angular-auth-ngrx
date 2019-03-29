import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { IAccount } from 'src/app/interfaces/IAccount';

export const adapter: EntityAdapter<IAccount> = createEntityAdapter<IAccount>();

export interface State extends EntityState<IAccount> {
    totalAccounts: number;
    totalPendingRequests: number;
    totalRequestsInProgress: number;
}

export const initialState: State = adapter.getInitialState({
    totalAccounts: undefined,
    totalPendingRequests: undefined,
    totalRequestsInProgress: undefined
});
