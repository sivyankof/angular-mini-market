import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeShellComponent } from './modules/products/containers/home-shell/home-shell.component';
import { ProcessOrderShellComponent } from './modules/products/containers/process-order-shell/process-order-shell.component';
import { ReviewProductShellComponent } from './modules/products/containers/review-product-shell/review-product-shell.component';

const routes: Routes = [
    { path: '', component: HomeShellComponent },
    { path: 'process-order', component: ProcessOrderShellComponent },
    { path: 'review-product/:id', component: ReviewProductShellComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
