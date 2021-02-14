import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { CardsService } from '../../tables/smart-table/cards.service';

@Component({
  selector: 'ngx-hi-lo',
  templateUrl: './hi-lo.component.html',
  styleUrls: ['./hi-lo.component.scss'],
})
export class HiLoComponent implements OnInit, OnChanges {
  color: string;
  card = [];
  chosenCard: number;
  id: number;
  cardData: Array<{
    ccnb: number;
    ccid: number;
    balance: number;
  }> = new Array();
  balance: number = 0;

  prevCard: number;
  currentCard: number;

  constructor(private cardService: CardsService) {}

  ngOnInit(): void {
    this.currentCard = 6;
    this.cardService.getCards().then((data) => {
      console.log(data);

      for (const el of data as any[]) {
        this.card.push(el.ccnb);
        this.cardData.push(el);
      }
    });
  }

  ngOnChanges(): void {
    this.currentCard = Math.floor(Math.random() * 12 + 2);
  }

  change(event) {
    this.chosenCard = event;
    this.color = 'black';
    this.prevCard = undefined;
    this.currentCard = 6;
    for (const el of this.cardData) {
      if (el.ccnb === event) {
        this.id = el.ccid;
        this.balance = el.balance;
      }
    }
  }

  Hi() {
    this.prevCard = this.currentCard;
    this.ngOnChanges();
    if (this.currentCard > this.prevCard) {
      this.balance++;
      this.color = '#00d68f';
    } else {
      this.balance = this.balance - 2;
      this.color = '#ff3d71';
    }

    this.cardService.addBalance({ ccid: this.id, balance: this.balance });
  }

  Lo() {
    this.prevCard = this.currentCard;
    this.ngOnChanges();
    if (this.currentCard < this.prevCard) {
      this.balance++;
      this.color = '#00d68f';
    } else {
      this.balance = this.balance - 2;
      this.color = '#ff3d71';
    }
    this.cardService.addBalance({ ccid: this.id, balance: this.balance });
  }
}
