import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { GetCardByNameService } from './card-selector/get-card-by-name.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CardsService } from '../../tables/smart-table/cards.service';
// import { CardEditService } from './card-creator/services/card-edit.service';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {
  ccnb: number;
  ccv: number;
  expirydate: Date;

  showCcv = false;

  getInputType() {
    if (this.showCcv) {
      return 'text';
    }
    return 'password';
  }

  toggleShowCcv() {
    this.showCcv = !this.showCcv;
  }

  constructor(
    private toastr: NbToastrService,
    private router: Router,
    private service: CardsService
  ) {}

  onSubmit() {
    if (isNaN(this.ccnb)) {
      this.toastr.danger(
        'CCNB should consist of numbers only',
        'Error in adding card'
      );
    } else if (!(this.expirydate instanceof Date)) {
      this.toastr.danger('Please choose a date', 'Error in adding card');
    } else if (isNaN(this.ccv)) {
      this.toastr.danger(
        'CCV should consist of numbers only',
        'Error in adding card'
      );
    } else {
      let json = {
        ccnb: this.ccnb,
        ccv: this.ccv,
        expirydate:
          this.expirydate.getFullYear() +
          '-' +
          (this.expirydate.getMonth() + 1) +
          '-' +
          this.expirydate.getDate(),
      };

      this.service
        .addCard(json)
        .then(() => {
          this.toastr.success('Credit card added', 'Success');
          setTimeout(() => {
            this.router.navigate(['pages/tables/smart-table']);
          }, 1500);
        })
        .catch(() => {
          this.toastr.danger('An error occured, please try again', 'Error');
        });
    }
  }

  back() {
    this.router.navigate(['pages/tables/smart-table']);
  }
}
