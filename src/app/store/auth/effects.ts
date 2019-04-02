import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as featureActions from './actions';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AuthStoreEffects {

    constructor(private authService: AuthService, private actions$: Actions, private router: Router) { }

    @Effect()
    loginEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.LogIn>(
            featureActions.AuthActionTypes.LogIn
        ),
        switchMap(action => {
            return this.authService
                .logIn(action.payload.email, action.payload.password)
                .pipe(
                    switchMap((user) => {
                        console.log(user);
                        return observableOf(new featureActions.LogInSuccess({ token: user.token, email: action.payload.email }));
                    }),
                    catchError(error => {
                        console.log(error);
                        return observableOf(new featureActions.LogInFailure({ error }));
                    })
                );
        })
    );

    @Effect({ dispatch: false })
    loginSuccessEffect: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.LogInSuccess>(
            featureActions.AuthActionTypes.LogInSuccess
        ),
        tap((action: featureActions.LogInSuccess) => {
            localStorage.setItem('token', action.payload.token);
            this.router.navigateByUrl('/');
        })
    );

    @Effect({ dispatch: false })
    loginFailureEffect: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.LogInFailure>(
            featureActions.AuthActionTypes.LogInFailure
        )
    );

    @Effect()
    signUpEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.SignUp>(
            featureActions.AuthActionTypes.SignUp
        ),
        switchMap(action =>
            this.authService
                .signUp(action.payload.email, action.payload.password)
                .pipe(
                    map((user) => {
                        console.log(user);
                        return new featureActions.SignUpSuccess({ token: user.token, email: action.payload.email });
                    }),
                    catchError(error => {
                        console.log(error);
                        return observableOf(new featureActions.SignUpFailure({ error }));
                    })
                )
        )
    );

    @Effect({ dispatch: false })
    signUpSuccessEffect: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.SignUpSuccess>(
            featureActions.AuthActionTypes.SignUpSuccess
        ),
        tap((action: featureActions.SignUpSuccess) => {
            localStorage.setItem('token', action.payload.token);
            this.router.navigateByUrl('/');
        })
    );

    @Effect({ dispatch: false })
    signUpFailureEffect: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.SignUpFailure>(
            featureActions.AuthActionTypes.SignUpFailure
        )
    );

    @Effect({ dispatch: false })
    logOutEffect: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.LogOut>(
            featureActions.AuthActionTypes.LogOut
        ),
        tap((user) => {
            localStorage.removeItem('token');
        })
    );

    @Effect({ dispatch: false })
    getStatusEffect: Observable<any> = this.actions$.pipe(
        ofType<featureActions.GetStatus>(
            featureActions.AuthActionTypes.GetStatus
        ),
        switchMap((payload) => {
            return this.authService.getStatus();
        })
    );

}



