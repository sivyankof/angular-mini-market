import { Component, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Product } from 'src/app/shared/interface/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
    selector: 'app-home-shell',
    templateUrl: './home-shell.component.html',
    styleUrls: ['./home-shell.component.scss'],
    providers: [ProductsService],
})
export class HomeShellComponent implements OnInit {
    public products: Product[] = [];

    constructor(public productsService: ProductsService, private router: Router) {}

    ngOnInit(): void {
        this.productsService
            .getProducts()
            .pipe(take(1))
            .subscribe((data: Product[]) => ((this.products = data), console.log(this.products)));
    }

    
}
