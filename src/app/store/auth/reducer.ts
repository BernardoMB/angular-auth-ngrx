import { Actions, AuthActionTypes } from './actions';
import { initialState, State } from './state';

export function authReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case AuthActionTypes.LogInSuccess: {
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
        case AuthActionTypes.LogInFailure: {
            console.log('LoginFailure reducer changing state');
            return {
                ...state,
                errorMessage: 'Incorrect email and/or password.'
            };
        }
        case AuthActionTypes.SignUpSuccess: {
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
        case AuthActionTypes.SignUpFailure: {
            return {
                ...state,
                errorMessage: 'That email is already in use.'
            };
        }
        case AuthActionTypes.LogOut: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
