import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { NbButtonModule, NbCardModule, NbSelectModule } from '@nebular/theme';
import { PurchaseComponent } from './purchase/purchase.component';



@NgModule({
  declarations: [ShopComponent, ShopPageComponent, PurchaseComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule
  ]
})
export class ShopModule { }
