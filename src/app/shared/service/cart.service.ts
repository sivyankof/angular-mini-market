import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { CART_LIST } from '../data/card-data';
import { Cart } from '../interface/cart.interface';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor() {}

    getProductCart(): Observable<Cart[]> {
        return of(CART_LIST).pipe(delay(500));
    }

    
}
