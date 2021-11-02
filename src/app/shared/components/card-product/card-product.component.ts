import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../interface/product.interface';

@Component({
    selector: 'app-card-product',
    templateUrl: './card-product.component.html',
    styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
    @Input() productItem: Product;

    constructor() {}

    ngOnInit(): void {
        
    }
}
