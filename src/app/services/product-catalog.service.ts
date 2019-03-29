import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
    providedIn: 'root'
})
export class ProductCatalogService {
    private url;

    constructor(private http: HttpClient) {
        this.url = environment.url;
    }

    public getProducts = () => {
        return this.http.get<{
            products: Array<IProduct>
        }>(
            `${this.url}/products`
        );
    }

    public activateProduct = (productId: string) => {
        return this.http.post<{
            activatedProduct: IProduct
        }>(
            `${this.url}/products/activate`,
            { productId }
        );
    }

    public deactivateProduct = (productId: string) => {
        return this.http.post<{
            deactivatedProduct: IProduct
        }>(
            `${this.url}/products/deactivate`,
            { productId }
        );
    }

}
