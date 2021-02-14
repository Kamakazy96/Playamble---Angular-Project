import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { ConfirmPromptComponent } from '../../confirm-prompt/confirm-prompt.component';
import { InputService } from '../../input-prompt/input.service';
import { UsersService } from './users.service';

@Component({
  selector: 'ngx-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
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
      firstname: {
        title: 'First Name',
        type: 'string',
        filter: false,
      },
      lastname: {
        title: 'Last Name',
        type: 'string',
        filter: false,
      },
      nationality: {
        title: 'Nationality',
        type: 'string',
        filter: false,
      },
      phonenb: {
        title: 'Phone Number',
        type: 'string',
        filter: false,
      },
      email: {
        title: 'Email',
        type: 'string',
        filter: false,
      },
      birthday: {
        title: 'Birthday',
        type: 'date',
        filter: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private confirmMessage: InputService,
    private deletePrompt: NbDialogService,
    private toastr: NbToastrService,
    private service: UsersService
  ) {}

  ngOnInit() {
    this.service.getUsers().then((data) => {
      for (const el of data as any[]) {
        el.birthday = el.birthday.split('T')[0];
      }
      this.source.load(data as any[]);
    });
  }

  makeAdmin(event) {
    // console.log(event.data);
    this.confirmMessage.setMessage(
      'Are you sure you want to make this user an admin?'
    );
    this.deletePrompt.open(ConfirmPromptComponent).onClose.subscribe(
      (name) =>
        name &&
        this.service.makeAdmin(event.data.id).then(() => {
          this.toastr.success(
            'User successfully Updated',
            'User is now an admin'
          );
          this.source.remove(event.data);
        }).catch(() => {
          this.toastr.danger('An error occured', 'Cannot update user');
        })
    );
  }

  deleteConfirm(event) {
    this.confirmMessage.setMessage(
      'Are you sure you want to delete this user?'
    );
    this.deletePrompt.open(ConfirmPromptComponent).onClose.subscribe(
      (name) =>
        name &&
        this.service
          .deleteUsers(event.data.id)
          .then(() => {
            this.toastr.success('User successfully Deleted', 'User deleted');
            this.source.remove(event.data);
          })
          .catch(() => {
            this.toastr.danger('An error occured', 'Cannot delete user');
          })
    );
  }

  onSearch(query: string = '') {
    if (query === '') {
      this.source.setFilter([]);
    } else {
      this.source.setFilter(
        [
          // fields we want to include in the search
          {
            field: 'firstname',
            search: query,
          },
          {
            field: 'lastname',
            search: query,
          },
          {
            field: 'nationality',
            search: query,
          },
          {
            field: 'phonenb',
            search: query,
          },
          {
            field: 'email',
            search: query,
          },
          {
            field: 'birthday',
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
