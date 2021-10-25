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
    public countProductsInCart: number = 0;
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
            .subscribe((data) => {
                this.myCart = data;
                this.countProductsInCart = data.length;
            });
    }

    toggleShowCart() {
        this.isShowCard = !this.isShowCard;
    }

    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }
}
