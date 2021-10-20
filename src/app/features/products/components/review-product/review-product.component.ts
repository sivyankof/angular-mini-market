import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { Product } from 'src/app/shared/interface/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
    selector: 'app-review-product',
    templateUrl: './review-product.component.html',
    styleUrls: ['./review-product.component.scss'],
})
export class ReviewProductComponent implements OnInit {
    private id: string;
    public product: Product;

    constructor(private activateRoute: ActivatedRoute, public productService: ProductsService, private router: Router) {
        this.id = activateRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
        this.productService
            .getOneProduct(this.id)
            .pipe(take(1))
            .subscribe((item) => (this.product = item));
    }

    goHome() {
        this.router.navigate(['']);
    }
}
