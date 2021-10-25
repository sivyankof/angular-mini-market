import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from 'src/app/shared/interface/product.interface';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
    @Input() product: Product;
    @Output() addProduct = new EventEmitter<any>();
    @Output() increaseProductNumber = new EventEmitter<any>();

    public obj = {};
    public countProducts: number = 0;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    showProduct() {
        this.router.navigate(['review-product', this.product.id]);
    }

    setCountProduct(value: number) {
        this.countProducts = this.countProducts + value <= 0 ? 0 : this.countProducts + value;
    }

    addToCart() {
        if (!this.countProducts) return;
        this.product.count = this.countProducts;
        this.addProduct.emit(this.product);
    }
}
