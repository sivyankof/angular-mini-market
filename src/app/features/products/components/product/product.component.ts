import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/app/shared/interface/product.interface';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    @Input() productItem: Product;

    constructor() {}

    ngOnInit(): void {
        console.log(this.productItem);
    }
}
