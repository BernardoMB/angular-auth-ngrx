import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStoreModule } from './auth/auth-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthStoreModule,
    StoreModule.forRoot({
      router: routerReducer
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
