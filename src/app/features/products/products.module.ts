import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeShellComponent } from './containers/home-shell/home-shell.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ProcessOrderShellComponent } from './containers/process-order-shell/process-order-shell.component';
import { ReviewProductComponent } from './components/review-product/review-product.component';
import { CardProductComponent } from 'src/app/shared/components/card-product/card-product.component';

@NgModule({
    declarations: [
        HomeShellComponent,
        ListProductsComponent,
        ProcessOrderShellComponent,
        ReviewProductComponent,
        CardProductComponent,
    ],
    imports: [CommonModule, MaterialModule],
    providers: [],
})
export class ProductsModule {}
