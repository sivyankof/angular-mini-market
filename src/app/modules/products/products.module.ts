import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeShellComponent } from './containers/home-shell/home-shell.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ProcessOrderShellComponent } from './containers/process-order-shell/process-order-shell.component';
import { ReviewProductShellComponent } from './containers/review-product-shell/review-product-shell.component';
import { CardProductComponent } from 'src/app/shared/components/card-product/card-product.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { ListImgComponent } from 'src/app/shared/components/list-img/list-img.component';

@NgModule({
    declarations: [
        HomeShellComponent,
        ListProductsComponent,
        ProcessOrderShellComponent,
        ReviewProductShellComponent,
        CardProductComponent,
        ListImgComponent,
        CommentListComponent,
    ],
    imports: [CommonModule, MaterialModule],
    providers: [],
})
export class ProductsModule {}
