import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NbAuthService } from '@nebular/auth';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  LOGIN_URL: string = 'http://localhost:4000/user/add_user';

  constructor(
    private httpClient: HttpClient,
  ) {}

  public login(data: object) {
    console.log(data);
    
    return this.httpClient
      .post(this.LOGIN_URL, { data })
      .toPromise();
  }
}
