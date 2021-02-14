import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  TOKEN: any;
  cards: any;
  GET_URL: string = 'http://localhost:4000/cards/get_cards_by_id';
  DELETE_URL: string = 'http://localhost:4000/cards/delete_card';
  ADD_URL: string = 'http://localhost:4000/cards/add_card';
  ADD_BALANCE_URL: string = 'http://localhost:4000/cards/add_balance'

  constructor(
    private httpClient: HttpClient,
    private authService: NbAuthService
  ) {}

  public getCards() {
    return new Promise((resolve) => {
      this.authService.getToken().subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          // TODO: Check Security of token!
          this.TOKEN = 'Bearer ' + token.getValue();
        }
        const head = new HttpHeaders({
          Authorization: this.TOKEN,
        });
        this.httpClient
          .get(this.GET_URL, { headers: head })
          .subscribe((res) => {
            this.cards = res;
            resolve(res);
          });
      });
    });
  }

  public deleteCard(id) {
    this.authService.getToken().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        // TODO: Check Security of token!
        this.TOKEN = 'Bearer ' + token.getValue();
      }
    });
    const head = new HttpHeaders({
      Authorization: this.TOKEN,
    });
    return this.httpClient
      .delete(`${this.DELETE_URL}/${id}`, { headers: head })
      .toPromise();
  }

  public addCard(data) {
    this.authService.getToken().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        // TODO: Check Security of token!
        this.TOKEN = 'Bearer ' + token.getValue();
      }
    });
    const head = new HttpHeaders({
      Authorization: this.TOKEN,
    });
    return this.httpClient
      .post(this.ADD_URL, { data }, { headers: head })
      .toPromise();
  }

  public addBalance(data){
    this.authService.getToken().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        // TODO: Check Security of token!
        this.TOKEN = 'Bearer ' + token.getValue();
      }
    });
    const head = new HttpHeaders({
      Authorization: this.TOKEN,
    });
    return this.httpClient
      .put(this.ADD_BALANCE_URL, { data }, { headers: head })
      .toPromise();
  }
}
