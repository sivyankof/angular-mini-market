import { Component, Input, OnInit } from '@angular/core';

import { Cart } from 'src/app/shared/interface/cart.interface';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
    selector: 'app-check-item-order',
    templateUrl: './check-item-order.component.html',
    styleUrls: ['./check-item-order.component.scss'],
})
export class CheckItemOrderComponent implements OnInit {
    @Input() myCart: Cart[];

    constructor(private cartService: CartService) {}

    ngOnInit(): void {}

    updateCountProduct(item: Cart, value: string) {
        this.cartService.getUpdate(item, value);
    }

    deleteProduct(item: Cart) {
        this.cartService.deleteProduct(item);
    }
}
