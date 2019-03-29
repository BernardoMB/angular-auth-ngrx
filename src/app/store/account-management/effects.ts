import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as featureActions from './actions';
import { AccountManagementService } from 'src/app/services/account-management.service';
import { IAccount } from 'src/app/interfaces/IAccount';

// TODO: Implement all effecs
@Injectable()
export class AccountManagementStoreEffects {

    constructor(private accountManagementService: AccountManagementService, private actions$: Actions) { }

    @Effect()
    getTotalAccountsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetTotalAccounts>(
            featureActions.AccountManagementActionTypes.GetTotalAccounts
        ),
        switchMap(action =>
            this.accountManagementService
                .getTotalAccounts()
                .pipe(
                    map((result: number) => {
                        return new featureActions.GetTotalAccountsSuccess(result);
                    }),
                    catchError(error => {
                        return observableOf(new featureActions.GetTotalAccountsFailure({ error }));
                    })
                )
        )
    );

    @Effect()
    getTotalPendingRequestsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetTotalPendingRequests>(
            featureActions.AccountManagementActionTypes.GetTotalPendingRequests
        ),
        switchMap(action =>
            this.accountManagementService
                .getTotalPendingRequests()
                .pipe(
                    map((result: number) => {
                        return new featureActions.GetTotalPendingRequestsSuccess(result);
                    }),
                    catchError(error => {
                        return observableOf(new featureActions.GetTotalPendingRequestsFailure({ error }));
                    })
                )
        )
    );

    @Effect()
    getTotalRequestsInProgressEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetTotalRequestsInProgress>(
            featureActions.AccountManagementActionTypes.GetTotalRequestsInProgress
        ),
        switchMap(action =>
            this.accountManagementService
                .getTotalRequestsInProgress()
                .pipe(
                    map((result: number) => {
                        return new featureActions.GetTotalRequestsInProgressSuccess(result);
                    }),
                    catchError(error => {
                        return observableOf(new featureActions.GetTotalRequestsInProgressFailure({ error }));
                    })
                )
        )
    );

    @Effect()
    getAccountsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetAccounts>(
            featureActions.AccountManagementActionTypes.GetAccounts
        ),
        switchMap(action =>
            this.accountManagementService
                .getAccounts()
                .pipe(
                    map((result: Array<IAccount>) => {
                        return new featureActions.GetAccountsSuccess(result);
                    }),
                    catchError(error => {
                        return observableOf(new featureActions.GetAccountsFailure({ error }));
                    })
                )
        )
    );

}
