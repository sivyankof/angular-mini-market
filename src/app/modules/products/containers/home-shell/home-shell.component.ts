import { Component, OnDestroy, OnInit } from '@angular/core';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Product } from 'src/app/shared/interface/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';
import { CartService } from 'src/app/shared/service/cart.service';
import { Cart } from 'src/app/shared/interface/cart.interface';

@Component({
    selector: 'app-home-shell',
    templateUrl: './home-shell.component.html',
    styleUrls: ['./home-shell.component.scss'],
    providers: [ProductsService],
})
export class HomeShellComponent implements OnInit, OnDestroy {
    public products: Product[] = [];
    private destroy = new Subject();

    constructor(public productsService: ProductsService, private cartService: CartService) {}

    ngOnInit(): void {
        this.initProductList();
    }

    initProductList() {
        this.productsService
            .getProducts()
            .pipe(takeUntil(this.destroy))
            .subscribe((data: Product[]) => (this.products = data));
    }

    addProduct(productToCart: Cart) {
        this.cartService
            .putNewProduct(productToCart)
            .pipe(take(1))
            .subscribe((res) => (res == true ? this.initProductList() : console.log('response not valid')));
    }

    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }
}
