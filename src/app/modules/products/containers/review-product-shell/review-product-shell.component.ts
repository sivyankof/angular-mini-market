import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Product } from 'src/app/shared/interface/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';
import { Review } from 'src/app/shared/interface/review.interface';

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
    public commentList: Review[];

    displayedColumns: string[] = ['name', 'text'];

    constructor(private activateRoute: ActivatedRoute, public productService: ProductsService, private router: Router) {
        this.id = activateRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
        this.initProduct();
        this.initComment();
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
    initComment() {
        this.productService
            .getComment(this.id)
            .pipe(takeUntil(this.destroy))
            .subscribe((data) => (this.commentList = data));
    }

    goPrevProduct() {
        this.id = this.productService.getPrevItem(this.id);
        this.router.navigate(['review-product', this.id]);
        this.initProduct();
        this.initComment();
    }

    goNextProduct() {
        this.id = this.productService.getNextItem(this.id);
        this.router.navigate(['review-product', this.id]);
        this.initProduct();
        this.initComment();
    }

    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }
}
