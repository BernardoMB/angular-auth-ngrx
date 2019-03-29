import { ComplianceActions, ComplianceActionTypes } from './actions';
import { initialState, State } from './state';

// TODO: Implement reducers
export function complianceReducer(state = initialState, action: ComplianceActions): State {
    switch (action.type) {
        case ComplianceActionTypes.GetComlianceOverviewSuccess: {
            return {
                ...state
            };
        }
        case ComplianceActionTypes.GetTransactionQueryResultsSuccess: {
            return {
                ...state
            };
        }
        default: {
            return state;
        }
    }
}