import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as featureActions from './actions';
import { SuperadminService } from 'src/app/services/superadmin.service';
import { IAdmin } from 'src/app/interfaces/IAdmin';
import { IActivity } from 'src/app/interfaces/IActivity';

@Injectable()
export class SuperadminStoreEffects {

    constructor(private superadminService: SuperadminService, private actions$: Actions) { }

    @Effect()
    getAdminsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetAdmins>(
            featureActions.SuperadminActionTypes.GetAdmins
        ),
        switchMap(action =>
            this.superadminService
                .getAdmins()
                .pipe(
                    map((result: { admins: Array<IAdmin> }) => {
                        return new featureActions.GetAdminsSuccess({ admins: result.admins });
                    }),
                    catchError(error => {
                        return observableOf(new featureActions.GetAdminsFailure({ error }));
                    })
                )
        )
    );

    @Effect()
    getActivitiesEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetActivities>(
            featureActions.SuperadminActionTypes.GetActivities
        ),
        switchMap(action =>
            this.superadminService
                .getActivities()
                .pipe(
                    map((result: {
                        activities: Array<IActivity>
                    }) => {
                        return new featureActions.GetActivitiesSuccess({ activities: result.activities });
                    }),
                    catchError(error => {
                        return observableOf(new featureActions.GetActivitiesFailure({ error }));
                    })
                )
        )
    );

}
