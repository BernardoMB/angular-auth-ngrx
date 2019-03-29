import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dashboardReducer } from './reducer';
import { DashboardStoreEffects } from './effects';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('dashboard', dashboardReducer),
        EffectsModule.forFeature([DashboardStoreEffects])
    ],
    providers: [DashboardStoreEffects]
})
export class DashboardStoreModule { }
