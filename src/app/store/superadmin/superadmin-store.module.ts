import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { superadminReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { SuperadminStoreEffects } from './effects';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('superadmin', superadminReducer),
        EffectsModule.forFeature([SuperadminStoreEffects])
    ]
})
export class SuperadminStoreModule { }
