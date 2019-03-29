import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as featureActions from './actions';
import { IComplianceOverview } from './interfaces';
import { ComplianceService } from 'src/app/services/compliance.service';
import { ITransactionQueryResults } from 'src/app/interfaces/ITransaction';

@Injectable()
export class ComplianceStoreEffects {

    constructor(private complianceService: ComplianceService, private actions$: Actions) { }

    @Effect()
    getComplianceOverviewEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetComlianceOverview>(
            featureActions.ComplianceActionTypes.GetComlianceOverview
        ),
        switchMap(action =>
            this.complianceService
                .getComplianceOverview(action.payload)
                .pipe(
                    map((result: IComplianceOverview) => {
                        return new featureActions.GetComlianceOverviewSuccess(result);
                    }),
                    catchError(error => {
                        return observableOf(new featureActions.GetComlianceOverviewFailure({ error }));
                    })
                )
        )
    );

    @Effect()
    getTransactionQueryResultsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetTransactionQueryResults>(
            featureActions.ComplianceActionTypes.GetTransactionQueryResults
        ),
        switchMap(action =>
            this.complianceService
                .getComplianceQueryResults(action.payload)
                .pipe(
                    map((result: {
                        averageTransactions: number,
                        averageUsage: number,
                        mostUsedType: string,
                        transactionQueryResults: ITransactionQueryResults
                    }) => {
                        return new featureActions.GetTransactionQueryResultsSuccess(result);
                    }),
                    catchError(error => {
                        return observableOf(new featureActions.GetTransactionQueryResultsFailure({ error }));
                    })
                )
        )
    );

}
