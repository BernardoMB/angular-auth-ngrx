import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';
import { State, adapter } from './state';
import { Dictionary } from '@ngrx/entity';
import { IProduct } from 'src/app/interfaces/IProduct';

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

export const selectProductCatalogState: MemoizedSelector<
    object,
    State
> = createFeatureSelector<State>('productCatalog');

export const selectProductsIds: MemoizedSelector<
    object,
    string[] | number[]
> = createSelector(
    selectProductCatalogState,
    selectIds
);

export const selectTransactionQueryResultsDictionary: MemoizedSelector<
    object,
    Dictionary<IProduct>
> = createSelector(
    selectProductCatalogState,
    selectEntities
);

export const selectTransactionQueryResults: MemoizedSelector<
    object,
    Array<IProduct>
> = createSelector(
    selectProductCatalogState,
    selectAll
);

export const selectTransactionQueryResultsCount: MemoizedSelector<
    object,
    number
> = createSelector(
    selectProductCatalogState,
    selectTotal
);
