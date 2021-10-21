import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Product } from 'src/app/shared/interface/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
    selector: 'app-review-product-shell',
    templateUrl: './review-product-shell.component.html',
    styleUrls: ['./review-product-shell.component.scss'],
})
export class ReviewProductShellComponent implements OnInit, OnDestroy {
    private id: string;
    private destroy = new Subject();
    public product: Product;
    public dataSource: object[];

    displayedColumns: string[] = ['name', 'text'];

    constructor(private activateRoute: ActivatedRoute, public productService: ProductsService, private router: Router) {
        this.id = activateRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
        this.initProduct();
    }

    initProduct() {
        this.productService
            .getOneProduct(this.id)
            .pipe(takeUntil(this.destroy))
            .subscribe((item) => {
                this.product = item;
                this.dataSource = item.moreInfo;
            });
    }

    goPrevProduct() {
        this.setPrevCurrentID();
        this.router.navigate(['review-product', this.id]);
        this.initProduct();
    }

    goNextProduct() {
        this.setNextCurrentId();
        this.router.navigate(['review-product', this.id]);
        this.initProduct();
    }

    setPrevCurrentID() {
        const i = Number(this.id);
        const maxLength = this.productService.getCountProducts();

        if (i > 0) {
            this.id = (i - 1).toString();
        } else {
            this.id = (maxLength - 1).toString();
        }
    }

    setNextCurrentId() {
        const i = Number(this.id);
        const maxLength = this.productService.getCountProducts();

        if (i + 1 < maxLength) {
            this.id = (i + 1).toString();
        } else {
            this.id = '0';
        }
    }

    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }
}
