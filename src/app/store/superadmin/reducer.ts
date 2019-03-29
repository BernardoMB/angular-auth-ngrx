import { SuperadminActions, SuperadminActionTypes } from './actions';
import { initialState, State, adminAdapter, activityAdapter } from './state';

// TODO: Implement reducers
export function superadminReducer(state = initialState, action: SuperadminActions): State {
    switch (action.type) {
        case SuperadminActionTypes.GetAdminsSuccess: {
            return { ...state, admins: adminAdapter.addMany(action.payload.admins, state.admins) };
        }
        case SuperadminActionTypes.GetActivitiesSuccess: {
            return { ...state, activites: activityAdapter.addMany(action.payload.activities, state.activites) };
        }
        default: {
            return state;
        }
    }
}
