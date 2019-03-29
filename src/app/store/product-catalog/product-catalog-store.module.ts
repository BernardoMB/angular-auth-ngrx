import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productCatalogReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductCatalogStoreEffects } from './effects';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('productCatalog', productCatalogReducer),
        EffectsModule.forFeature([ProductCatalogStoreEffects])
    ]
})
export class ProductCatalogStoreModule { }
