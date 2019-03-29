import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as featureActions from './actions';
import { DashboardService } from 'src/app/services/dashboard.service';

// TODO: Implement all effecs
@Injectable()
export class DashboardStoreEffects {

    constructor(private dashboardService: DashboardService, private actions$: Actions) { }

    @Effect()
    getTotalWalletsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetTotalWallets>(
            featureActions.DashboardActionTypes.GetTotalWallets
        ),
        switchMap(action =>
            this.dashboardService
                .getTotalWallets(action.payload)
                .pipe(
                    map((result: { value: number, change: number }) => {
                        return new featureActions.GetTotalWalletsSuccess(result);
                    }),
                    catchError(error => {
                        return observableOf(new featureActions.GetTotalWalletsFailure({ error }));
                    })
                )
        )
    );

    @Effect()
    getTotalWalletsBalanceEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetTotalWalletsBalance>(
            featureActions.DashboardActionTypes.GetTotalWalletsBalance
        ),
        switchMap(action =>
            this.dashboardService
                .getTotalWalletsBalance(action.payload)
                .pipe(
                    map((result: { value: number, change: number }) => {
                        return new featureActions.GetTotalWalletsBalanceSuccess(result);
                    }),
                    catchError(error => {
                        return observableOf(new featureActions.GetTotalWalletsBalanceFailure({ error }));
                    })
                )
        )
    );

}
