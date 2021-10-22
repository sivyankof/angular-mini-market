import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayCartComponent } from './components/overlay-cart/overlay-cart.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
    declarations: [OverlayCartComponent],
    imports: [CommonModule, MaterialModule],
    exports: [OverlayCartComponent],
})
export class ShoppingCartModule {}
