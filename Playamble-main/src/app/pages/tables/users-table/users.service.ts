import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  TOKEN: any;
  users: any;
  GET_URL: string = 'http://localhost:4000/user/get_user';
  DELETE_URL: string = 'http://localhost:4000/user/delete_user';
  ADMIN_URL: string = 'http://localhost:4000/user/make_admin';
  constructor(
    private httpClient: HttpClient,
    private authService: NbAuthService
  ) {}

  public getUsers(){
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
            this.users = res;
            resolve(res);
          });
      });
    });
  }

  public deleteUsers(id) {
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

  public makeAdmin(data){
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
      .put(this.ADMIN_URL, {data},{ headers: head })
      .toPromise();
  }
}
