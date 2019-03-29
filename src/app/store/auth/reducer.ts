import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function authReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    token: action.payload.token,
                    email: action.payload.email
                },
                errorMessage: null
            };
        }
        case ActionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                errorMessage: 'Incorrect email and/or password.'
            };
        }
        default: {
            return state;
        }
    }
}