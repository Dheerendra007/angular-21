import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductAPI } from '../interfaces/product-api';

@Injectable({
    providedIn: 'root'
})

export class Products {
    apiURL: string = 'https://fakestoreapi.com/products';

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<ProductAPI[]>(this.apiURL);
    }
}
