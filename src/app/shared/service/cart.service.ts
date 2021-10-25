import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { CART_LIST } from '../data/card-data';
import { Cart } from '../interface/cart.interface';
import { Product } from '../interface/product.interface';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor() {}

    getProductCart(): Observable<Cart[]> {
        return of(CART_LIST).pipe(delay(500));
    }

    putNewProduct(value: Cart): Observable<boolean> {
        CART_LIST.push(value);
        return of(true).pipe(delay(500));
    }

    checkedLengthCart() {
        return CART_LIST.length;
    }

    getTotalPrice() {
        return CART_LIST.reduce((acc, cur): any => acc + cur.price * cur.count, 0);
    }

    getUpdate(item: Cart, value: string) {
        CART_LIST.find((el, i) => {
            if (el.id === item.id) {
                if (el.count + Number(value) < 1) return;

                el.count += Number(value);
            }
        });
    }
    deleteProduct(item: Cart) {
        const index = CART_LIST.findIndex((el) => el.id === item.id);
        CART_LIST.splice(index, 1);
    }
}
