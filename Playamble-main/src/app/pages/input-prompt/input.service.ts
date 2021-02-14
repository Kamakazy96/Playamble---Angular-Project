import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  private message: string = '';
  constructor() { }

  public setMessage(input: string) {
    this.message = input;
  }


  public getMessage() {
    return this.message;
  }
}
