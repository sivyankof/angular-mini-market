import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { CART_LIST } from '../data/cart-data';
import { Cart } from '../interface/cart.interface';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor() {}

    getProductCart(): Observable<Cart[]> {
        return of(CART_LIST).pipe(delay(500));
    }

    putNewProduct(newProduct: Cart): Observable<boolean> {
        const index = CART_LIST.findIndex((el) => el.product.id === newProduct.product.id);

        if (index < 0) {
            CART_LIST.push(newProduct);
        } else {
            CART_LIST[index].count += newProduct.count;
        }

        return of(true).pipe(delay(500));
    }

    checkedLengthCart() {
        return CART_LIST.length;
    }

    getTotalPrice() {
        return CART_LIST.reduce((acc, cur): any => acc + cur.product.price * cur.count, 0);
    }

    getUpdate(item: Cart, value: string) {
        CART_LIST.find((el) => {
            if (el.product.id === item.product.id) {
                if (el.count + Number(value) < 1) return;
                el.count += Number(value);
            }
        });
    }

    deleteProduct(item: Cart) {
        const index = CART_LIST.findIndex((el) => el.product.id === item.product.id);
        CART_LIST.splice(index, 1);
    }
}
