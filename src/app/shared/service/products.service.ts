import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { PRODUCTS } from '../data/products-data';
import { Product } from '../interface/product.interface';
import { REVIEWS } from '../data/reviews-data';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor() {}

    getProducts(): Observable<Product[]> {
        return of(PRODUCTS).pipe(delay(1000));
    }

    getOneProduct(id: string): Observable<Product> {
        return of(PRODUCTS.find((el) => el.id === id)).pipe(delay(100));
    }

    getCountProducts() {
        return PRODUCTS.length;
    }

    getPrevItem(id: string) {
        let index = PRODUCTS.findIndex((el) => el.id === id);
        return PRODUCTS[index - 1] === undefined ? PRODUCTS[PRODUCTS.length - 1].id : PRODUCTS[index - 1].id;
    }

    getNextItem(id: string) {
        let index = PRODUCTS.findIndex((el) => el.id === id);
        return PRODUCTS[index + 1] === undefined ? PRODUCTS[0].id : PRODUCTS[index + 1].id;
    }

    getComment(id: string) {
        return of(REVIEWS.filter((el, i) => el.idProduct === id));
    }
}
