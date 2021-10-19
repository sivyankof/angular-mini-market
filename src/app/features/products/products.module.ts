import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeShellComponent } from './containers/home-shell/home-shell.component';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ProcessOrderShellComponent } from './containers/process-order-shell/process-order-shell.component';

@NgModule({
    declarations: [HomeShellComponent, ProductComponent, ProcessOrderShellComponent],
    imports: [CommonModule, MaterialModule],
})
export class ProductsModule {}
