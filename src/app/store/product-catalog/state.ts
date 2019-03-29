import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { IProduct } from 'src/app/interfaces/IProduct';

export const adapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>();

export interface State extends EntityState<IProduct> {
}

export const initialState: State = adapter.getInitialState({
});
