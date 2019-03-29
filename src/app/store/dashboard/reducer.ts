import { DashboardActions, DashboardActionTypes } from './actions';
import { initialState, State } from './state';

// TODO: Implement reducers
export function dashboardReducer(state = initialState, action: DashboardActions): State {
    switch (action.type) {
        case DashboardActionTypes.GetTotalAccountHoldersSuccess: {
            return {
                ...state
            };
        }
        default: {
            return state;
        }
    }
}