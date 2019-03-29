import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as featureActions from './actions';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

// TODO: Implement all effecs
@Injectable()
export class AuthStoreEffects {

    constructor(private authService: AuthService, private actions$: Actions, private router: Router) { }

    @Effect()
    loginEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.LoginAction>(
            featureActions.ActionTypes.LOGIN
        ),
        switchMap(action =>
            this.authService
                .logIn(action.payload.email, action.payload.password)
                .pipe(
                    map((user) => {
                        console.log(user);
                        return new featureActions.LoginSuccessAction({ token: user.token, email: action.payload.email });
                    }),
                    catchError(error => {
                        console.log(error);
                        return observableOf(new featureActions.LoginFailureAction({ error }));
                    })
                )
        )
    );

    @Effect({ dispatch: false })
    loginSuccessEffect: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.LoginSuccessAction>(
            featureActions.ActionTypes.LOGIN_SUCCESS
        ),
        tap((action: featureActions.LoginSuccessAction) => {
            localStorage.setItem('token', action.payload.token);
            this.router.navigateByUrl('/');
        })
    );

    @Effect({ dispatch: false })
    loginFailureEffect: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.LoginFailureAction>(
            featureActions.ActionTypes.LOGIN_FAILURE
        )
    );

}
