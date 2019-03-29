import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { IAdmin } from 'src/app/interfaces/IAdmin';
import { IActivity } from 'src/app/interfaces/IActivity';

export const adminAdapter: EntityAdapter<IAdmin> = createEntityAdapter<IAdmin>();
export const activityAdapter: EntityAdapter<IActivity> = createEntityAdapter<IActivity>();

interface AdminState extends EntityState<IAdmin> {
    total: number;
}

interface ActivityState extends EntityState<IActivity> {
    total: number;
}

const adminInitialState: AdminState = adminAdapter.getInitialState({ total: 0 });
const activityInitialState: ActivityState = activityAdapter.getInitialState({ total: 0 });

export interface State {
    admins: AdminState;
    activites: ActivityState;
}

export const initialState: State = {
    admins: adminInitialState,
    activites: activityInitialState
};
