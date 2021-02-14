import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ShopPageComponent } from './shop-page/shop-page.component';


const routes: Routes = [{
  path: '',
  component: ShopComponent,
  children: [
    {
      path: 'shop-page',
      component: ShopPageComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ShopRoutingModule { }


export const routedComponents = [
  ShopComponent,
  ShopPageComponent
];
