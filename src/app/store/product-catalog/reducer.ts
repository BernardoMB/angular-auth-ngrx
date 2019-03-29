import { ProductCatalogActions, ProductCatalogActionTypes } from './actions';
import { initialState, State, adapter } from './state';

// TODO: Implement reducers
export function productCatalogReducer(state = initialState, action: ProductCatalogActions): State {
    switch (action.type) {
        case ProductCatalogActionTypes.GetProducts: {
            return adapter.addMany(action.payload, state);
        }
        default: {
            return state;
        }
    }
}