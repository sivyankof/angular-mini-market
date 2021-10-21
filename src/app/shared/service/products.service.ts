import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { PRODUCTS } from '../data/products-data';
import { Product } from '../interface/product.interface';
import { REVIEWS } from '../data/reviews-data';
import { Review } from '../interface/review.interface';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor() {}

    getProducts(): Observable<Product[]> {
        return of(PRODUCTS).pipe(delay(1000));
    }

    getOneProduct(index: string): Observable<Product> {
        return of(PRODUCTS[index]).pipe(delay(100));
    }

    prevProduct(i: number): Observable<any> {
        return of(
            PRODUCTS.filter((item, i) => {
                if (PRODUCTS[i - 1] !== null) {
                    return PRODUCTS[i - 1];
                } else {
                    return PRODUCTS[i];
                }
            }),
        );
    }

    getCountProducts() {
        return PRODUCTS.length;
    }

    getComment(id: string) {
        return of(REVIEWS.filter((el, i) => el.idProduct === id));
    }
}
