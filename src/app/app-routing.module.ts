import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeShellComponent } from './features/products/containers/home-shell/home-shell.component';
import { ProcessOrderShellComponent } from './features/products/containers/process-order-shell/process-order-shell.component';
import { ReviewProductComponent } from './features/products/components/review-product/review-product.component';

const routes: Routes = [
    { path: '', component: HomeShellComponent },
    { path: 'process-order', component: ProcessOrderShellComponent },
    { path: 'review-product/:id', component: ReviewProductComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
