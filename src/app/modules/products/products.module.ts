import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeShellComponent } from './containers/home-shell/home-shell.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ProcessOrderShellComponent } from './containers/process-order-shell/process-order-shell.component';
import { ReviewProductShellComponent } from './containers/review-product-shell/review-product-shell.component';
import { CardProductComponent } from 'src/app/shared/components/card-product/card-product.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { ListImgComponent } from 'src/app/shared/components/list-img/list-img.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CheckItemOrderComponent } from './components/check-item-order/check-item-order.component';
import { CardActionsComponent } from 'src/app/shared/components/card-actions/card-actions.component';


@NgModule({
    declarations: [
        HomeShellComponent,
        ProcessOrderShellComponent,
        ReviewProductShellComponent,
        CardProductComponent,
        ListImgComponent,
        CommentListComponent,
        ProductItemComponent,
        CheckItemOrderComponent,
        CardActionsComponent
    ],
    imports: [CommonModule, MaterialModule],
    providers: [],
})
export class ProductsModule {}
