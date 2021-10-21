import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { Product } from 'src/app/shared/interface/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
    selector: 'app-review-product',
    templateUrl: './review-product.component.html',
    styleUrls: ['./review-product.component.scss'],
})
export class ReviewProductComponent implements OnInit, OnDestroy {
    private id: string;
    private destroy = new Subject();
    public product: Product;

    constructor(private activateRoute: ActivatedRoute, public productService: ProductsService, private router: Router) {
        this.id = activateRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
        this.productService
            .getOneProduct(this.id)
            .pipe(takeUntil(this.destroy))
            .subscribe((item) => (this.product = item));
    }

    goHome() {
        this.router.navigate(['']);
    }

    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }
}
