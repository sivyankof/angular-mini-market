import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    @Output() increaseProductNumber = new EventEmitter<any>();

    public count: number = 0;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    showProduct(index: number) {
        this.router.navigate(['review-product', index]);
    }

    setCountProduct(i: number, value: string) {
        this.increaseProductNumber.emit({ i, value });
    }
}
