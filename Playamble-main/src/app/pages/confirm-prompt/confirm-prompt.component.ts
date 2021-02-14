import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { InputService } from '../input-prompt/input.service';

@Component({
  selector: 'ngx-confirm-prompt',
  templateUrl: './confirm-prompt.component.html',
  styleUrls: ['./confirm-prompt.component.scss'],
})
export class ConfirmPromptComponent {
  message = this.messageData.getMessage();

  constructor(
    protected dialogRef: NbDialogRef<ConfirmPromptComponent>,
    private messageData: InputService
  ) {}

  cancel() {
    this.dialogRef.close();
  }

  submit(name) {
    this.dialogRef.close(name);
  }
}
