import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private pack: number;

  public getPack(){
    return this.pack;
  }

  public setPack(nb){
    this.pack = nb;
  }

  constructor() { }
}
