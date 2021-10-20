import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from 'src/app/shared/interface/product.interface';

@Component({
    selector: 'app-list-products',
    templateUrl: './list-products.component.html',
    styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
    @Input() products: Product;

    public count: number = 0;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    showProduct(productItem: Product) {
        this.router.navigate(['review-product', productItem.id]);
    }
}
