import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PurchaseService } from '../purchase.service';
import { PurchaseComponent } from '../purchase/purchase.component';

@Component({
  selector: 'ngx-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
})
export class ShopPageComponent {
  constructor(
    private dialog: NbDialogService,
    private service: PurchaseService
  ) {}

  purchase(event) {
    this.service.setPack(event);
    this.dialog.open(PurchaseComponent);
  }
}
