import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { State } from './state';
import { User } from 'src/app/models/user';

const getIsAuthenticated = (state: State): boolean => state.isAuthenticated;
const getUser = (state: State): User => state.user;
const getErrorMessage = (state: State): string => state.errorMessage;

export const selectAuthState: MemoizedSelector<
    object,
    State
> = createFeatureSelector<State>('auth');

export const selectAuthIsAuthenticated: MemoizedSelector<
    object,
    boolean
> = createSelector(
    selectAuthState,
    getIsAuthenticated
);

export const selectAuthUser: MemoizedSelector<
    object,
    User
> = createSelector(
    selectAuthState,
    getUser
);

export const selectAuthErrorMessage: MemoizedSelector<
    object,
    string
> = createSelector(
    selectAuthState,
    getErrorMessage
);
