import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../interface/cart.interface';
import { Product } from '../../interface/product.interface';
import { CartService } from '../../service/cart.service';

@Component({
    selector: 'app-card-actions',
    templateUrl: './card-actions.component.html',
    styleUrls: ['./card-actions.component.scss'],
})
export class CardActionsComponent implements OnInit {
    @Input() item;

    constructor(private cartService: CartService) {}

    ngOnInit(): void {}
    updateCountProduct(item: Cart, value: string) {
        this.cartService.getUpdate(item, value);
    }

    deleteProduct(item: Cart) {
        this.cartService.deleteProduct(item);
    }
}
