import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { data } from 'jquery';
import { CardsService } from '../../tables/smart-table/cards.service';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'ngx-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {
  pack = this.service.getPack();
  card = [];
  chosenCard: number;
  id: number;
  cardData: Array<{ ccnb: number; ccid: number }> = new Array();

  constructor(
    private service: PurchaseService,
    private cardService: CardsService,
    private toastr: NbToastrService,
    protected dialogRef: NbDialogRef<PurchaseComponent>
  ) {}

  ngOnInit(): void {
    this.cardService.getCards().then((data) => {
      for (const el of data as any[]) {
        this.card.push(el.ccnb);
        this.cardData.push(el);
      }
    });
  }

  change(event) {
    this.chosenCard = event;
    for (const el of this.cardData) {
      if (el.ccnb === event) this.id = el.ccid;
    }
  }

  onSubmit() {
    this.cardService.addBalance({ccid: this.id, balance: this.pack}).then(() => {
      this.toastr.success('Enjoy Gambling ;)', 'Purchase Successful');
      this.dialogRef.close();
    }).catch(()=>{
      this.toastr.danger('Please try again later', 'Purchase Failed');
    })
  }
}
