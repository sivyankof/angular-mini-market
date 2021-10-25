import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Cart } from 'src/app/shared/interface/cart.interface';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
    selector: 'app-overlay-cart',
    templateUrl: './overlay-cart.component.html',
    styleUrls: ['./overlay-cart.component.scss'],
    providers: [CartService],
})
export class OverlayCartComponent implements OnInit, OnDestroy {
    public myCart: Cart[];
    public isShowCard: boolean = false;
    private destroy = new Subject();

    constructor(public cartService: CartService) {}

    ngOnInit(): void {
        this.initCart();
    }

    initCart() {
        this.cartService
            .getProductCart()
            .pipe(takeUntil(this.destroy))
            .subscribe((data) => (this.myCart = data));
    }

    get checkedLengthCart(): number {
        return this.cartService.checkedLengthCart();
    }

    get totalPrice() {
        return this.cartService.getTotalPrice();
    }

    toggleShowCart() {
        this.isShowCard = !this.isShowCard;
    }

    updateCountProduct(item: Cart, value: string) {
        this.cartService.getUpdate(item, value);
    }

    deleteProduct(item: Cart) {
        this.cartService.deleteProduct(item);
    }

    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }
}
