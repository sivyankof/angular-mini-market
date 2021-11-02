import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Cart } from 'src/app/shared/interface/cart.interface';
import { CartService } from 'src/app/shared/service/cart.service';
import { AddressOrderComponent } from '../../components/address-order/address-order.component';

@Component({
    selector: 'app-process-order-shell',
    templateUrl: './process-order-shell.component.html',
    styleUrls: ['./process-order-shell.component.scss'],
})
export class ProcessOrderShellComponent implements OnInit, OnDestroy {
    private destroy = new Subject();
    private totalPrice: number;
    public validForm: boolean;
    public myCart: Cart[] = [];

    @ViewChild(AddressOrderComponent) addressFormChild: AddressOrderComponent;

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.cartService
            .getProductCart()
            .pipe(takeUntil(this.destroy))
            .subscribe((data) => (this.myCart = data));

        this.totalPrice = this.cartService.getTotalPrice();
    }

    checkForm() {
        this.addressFormChild.myForm.markAllAsTouched();
        this.validForm = this.addressFormChild.myForm.valid;
    }

    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }
}
