import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { Product } from 'src/app/shared/interface/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
    selector: 'app-home-shell',
    templateUrl: './home-shell.component.html',
    styleUrls: ['./home-shell.component.scss'],
    providers: [ProductsService],
})
export class HomeShellComponent implements OnInit, OnDestroy {
    public products: Product[] = [];
    public productListCount = {};
    private destroy = new Subject();

    constructor(public productsService: ProductsService, private router: Router) {}

    ngOnInit(): void {
        this.productsService
            .getProducts()
            .pipe(takeUntil(this.destroy))
            .subscribe((data: Product[]) => {
                this.products = data;

                data.forEach((el, i) => {
                    this.productListCount[i] = 0;
                });
            });
    }

    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }

    increaseProductNumber(arg: { i: number; value: string }) {
        const { i, value } = arg;

        this.productListCount[i] =
            this.productListCount[i] + Number(value) <= 0 ? 0 : this.productListCount[i] + Number(value);
    }
}
