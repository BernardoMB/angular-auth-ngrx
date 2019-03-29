import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { complianceReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { ComplianceStoreEffects } from './effects';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('compliance', complianceReducer),
        EffectsModule.forFeature([ComplianceStoreEffects])
    ]
})
export class ComplianceStoreModule { }
