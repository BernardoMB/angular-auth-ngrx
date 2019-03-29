import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStoreModule } from './auth/auth-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DashboardStoreModule } from './dashboard';
import { AccountManagementStoreModule } from './account-management';
import { ProductCatalogStoreModule } from './product-catalog';
import { SuperadminStoreModule } from './superadmin';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthStoreModule,
    DashboardStoreModule,
    AccountManagementStoreModule,
    ProductCatalogStoreModule,
    SuperadminStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
