import { initialState, State, adapter } from './state';
import { AccountManagementActions, AccountManagementActionTypes } from './actions';

// TODO: Implement reducers
export function accountManagementReducer(state = initialState, action: AccountManagementActions): State {
    switch (action.type) {
        case AccountManagementActionTypes.GetAccounts: {
            return adapter.addMany(action.payload, state);
        }
        default: {
            return state;
        }
    }
}