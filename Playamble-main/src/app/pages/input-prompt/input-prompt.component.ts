import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { InputService } from './input.service';

@Component({
  selector: 'ngx-input-prompt',
  templateUrl: './input-prompt.component.html',
  styleUrls: ['./input-prompt.component.scss'],
})
export class InputPromptComponent {
  message = this.input.getMessage();

  constructor(
    protected dialogRef: NbDialogRef<InputPromptComponent>,
    private input: InputService
  ) {}

  cancel() {
    this.dialogRef.close();
  }

  submit(name) {
    this.dialogRef.close(name);
  }
}
