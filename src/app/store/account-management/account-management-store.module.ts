import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { accountManagementReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountManagementStoreEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('accountManagement', accountManagementReducer),
    EffectsModule.forFeature([AccountManagementStoreEffects])
  ]
})
export class AccountManagementStoreModule { }
