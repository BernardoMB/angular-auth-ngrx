import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as featureActions from './actions';
import { ProductCatalogService } from 'src/app/services/product-catalog.service';
import { IProduct } from 'src/app/interfaces/IProduct';

@Injectable()
export class ProductCatalogStoreEffects {

    constructor(private productCatalogService: ProductCatalogService, private actions$: Actions) { }

    @Effect()
    getProductsEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetProducts>(
            featureActions.ProductCatalogActionTypes.GetProducts
        ),
        switchMap(action =>
            this.productCatalogService
                .getProducts()
                .pipe(
                    map((result: { products: Array<IProduct> }) => {
                        return new featureActions.GetProductsSuccess(result.products);
                    }),
                    catchError(error => {
                        return observableOf(new featureActions.GetProductsFailure({ error }));
                    })
                )
        )
    );

    @Effect()
    activateProductEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.ActivateProduct>(
            featureActions.ProductCatalogActionTypes.ActivateProduct
        ),
        switchMap(action =>
            this.productCatalogService
                .activateProduct(action.payload.productId)
                .pipe(
                    map((result: {
                        activatedProduct: IProduct
                    }) => {
                        return new featureActions.ActivateProductSuccess({ activatedProduct: result.activatedProduct });
                    }),
                    catchError(error => {
                        return observableOf(new featureActions.ActivateProductFailure({ error }));
                    })
                )
        )
    );

    @Effect()
    deactivateProductEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.DeactivateProduct>(
            featureActions.ProductCatalogActionTypes.DeactivateProduct
        ),
        switchMap(action =>
            this.productCatalogService
                .deactivateProduct(action.payload.productId)
                .pipe(
                    map((result: {
                        deactivatedProduct: IProduct
                    }) => {
                        return new featureActions.DeactivateProductSuccess({ deactivatedProduct: result.deactivatedProduct });
                    }),
                    catchError(error => {
                        return observableOf(new featureActions.DeactivateProductFailure({ error }));
                    })
                )
        )
    );

}
