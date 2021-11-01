import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cart } from 'src/app/shared/interface/cart.interface';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
    selector: 'app-process-order-shell',
    templateUrl: './process-order-shell.component.html',
    styleUrls: ['./process-order-shell.component.scss'],
})
export class ProcessOrderShellComponent implements OnInit, OnDestroy {
    private destroy = new Subject();
    private totalPrice: number;
    public myCart: Cart[] = [];

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.cartService
            .getProductCart()
            .pipe(takeUntil(this.destroy))
            .subscribe((data) => ((this.myCart = data), console.log(this.myCart)));

        this.totalPrice = this.cartService.getTotalPrice();
    }

    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }
}
