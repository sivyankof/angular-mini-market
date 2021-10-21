import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from 'src/app/shared/interface/product.interface';

interface List {
    id: number;
}

@Component({
    selector: 'app-list-products',
    templateUrl: './list-products.component.html',
    styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
    @Input() products: Product;
    @Input() productListCount: List;

    public count: number = 0;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    showProduct(productItem: Product) {
        this.router.navigate(['review-product', productItem.id]);
    }

    increaseProductNumber(i: number, value: string) {
        this.productListCount[i] = this.productListCount[i] + Number(value) <= 0 ? 0 : this.productListCount[i] + Number(value);

        console.log(this.productListCount);
    }
}
