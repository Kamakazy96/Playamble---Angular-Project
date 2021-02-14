import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from './cards.service';
import { InputService } from '../../input-prompt/input.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmPromptComponent } from '../../confirm-prompt/confirm-prompt.component';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
@Injectable()
export class SmartTableComponent implements OnInit {
  settings = {
    actions: {
      add: false,
      edit: false,
      position: 'right',
    },

    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',

      confirmDelete: true,
    },

    columns: {
      ccnb: {
        title: 'Credit Card Number',
        type: 'string',
        filter: false,
      },
      expirydate: {
        title: 'Expiration Date',
        type: 'string',
        filter: false,
      },
      balance: {
        title: 'Balance',
        type: 'number',
        filter: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: CardsService,
    private router: Router,
    private confirmMessage: InputService,
    private deletePrompt: NbDialogService,
    private toastr: NbToastrService
  ) {}

  ngOnInit() {
    this.service.getCards().then((data) => {
      for (const el of data as any[]) {
        el.expirydate = el.expirydate.split('T')[0];
      }
      this.source.load(data as any[]);
    });
  }

  onSelect(event): void {}

  deleteConfirm(event) {
    console.log(event.data);
    
    this.confirmMessage.setMessage(
      'Are you sure you want to delete this card?'
    );
    this.deletePrompt.open(ConfirmPromptComponent).onClose.subscribe(
      (name) =>
        name &&
        this.service
          .deleteCard(event.data.ccid)
          .then(() => {
            this.toastr.success('Card successfully Deleted', 'Card deleted');
            this.source.remove(event.data);
          })
          .catch(() => {
            this.toastr.danger('An error occured', 'Cannot delete card');
          })
    );
  }

  onPress() {
    this.router.navigate(["../pages/forms/form-layouts"]);
  }

  onSearch(query: string = '') {
    if (query === '') {
      this.source.setFilter([]);
    } else {
      this.source.setFilter(
        [
          // fields we want to include in the search
          {
            field: 'ccnb',
            search: query,
          },
          {
            field: 'exiprydate',
            search: query,
          },
          {
            field: 'balance',
            search: query,
          },
        ],
        false
      );
      // second parameter specifying whether to perform 'AND' or 'OR' search
      // (meaning all columns should contain search query or at least one)
      // 'AND' by default, so changing to 'OR' by setting false here
    }
  }
}
