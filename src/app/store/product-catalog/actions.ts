import { Action } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/IProduct';

export enum ProductCatalogActionTypes {
    GetProducts = '[Product Catalog] GetProducts',
    GetProductsSuccess = '[Product Catalog] GetProductsSuccess',
    GetProductsFailure = '[Product Catalog] GetProductsFailure',
    ActivateProduct = '[Product Catalog] ActivateProduct',
    ActivateProductSuccess = '[Product Catalog] ActivateProductSuccess',
    ActivateProductFailure = '[Product Catalog] ActivateProductFailure',
    DeactivateProduct = '[Product Catalog] DeactivateProduct',
    DeactivateProductSuccess = '[Product Catalog] DeactivateProductSuccess',
    DeactivateProductFailure = '[Product Catalog] DeactivateProductFailure',
}

export class GetProducts implements Action {
    readonly type = ProductCatalogActionTypes.GetProducts;
    constructor(public payload: any) { }
}
export class GetProductsSuccess implements Action {
    readonly type = ProductCatalogActionTypes.GetProductsSuccess;
    constructor(public payload: Array<IProduct>) { }
}
export class GetProductsFailure implements Action {
    readonly type = ProductCatalogActionTypes.GetProducts;
    constructor(public payload: any) { }
}

export class ActivateProduct implements Action {
    readonly type = ProductCatalogActionTypes.ActivateProduct;
    constructor(public payload: { productId: string }) { }
}
export class ActivateProductSuccess implements Action {
    readonly type = ProductCatalogActionTypes.ActivateProductSuccess;
    constructor(public payload: { activatedProduct: IProduct }) { }
}
export class ActivateProductFailure implements Action {
    readonly type = ProductCatalogActionTypes.ActivateProductFailure;
    constructor(public payload: any) { }
}

export class DeactivateProduct implements Action {
    readonly type = ProductCatalogActionTypes.DeactivateProduct;
    constructor(public payload: { productId: string }) { }
}
export class DeactivateProductSuccess implements Action {
    readonly type = ProductCatalogActionTypes.DeactivateProductSuccess;
    constructor(public payload: { deactivatedProduct: IProduct }) { }
}
export class DeactivateProductFailure implements Action {
    readonly type = ProductCatalogActionTypes.DeactivateProductFailure;
    constructor(public payload: any) { }
}

export type ProductCatalogActions = GetProducts
    | GetProductsSuccess
    | GetProductsFailure
    | ActivateProduct
    | ActivateProductSuccess
    | ActivateProductFailure
    | DeactivateProduct
    | DeactivateProductSuccess
    | DeactivateProductFailure
    ;
