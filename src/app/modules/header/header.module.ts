import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { OverlayCartComponent } from './containers/overlay-cart/overlay-cart.component';

@NgModule({
    declarations: [MenuComponent, OverlayCartComponent],
    imports: [CommonModule, MaterialModule, RouterModule],
    exports: [MenuComponent],
})
export class HeaderModule {}
