import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent {
  public firstName: string;
  public lastName: string;
  public birthday: Date;
  public nationality: string;
  public phoneNb: string;
  public address: string;
  public email: string;
  public password: string;
  public confirmPassword: string;

  showPassword = false;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  register() {
    if (
      !this.firstName ||
      !this.lastName ||
      !this.birthday ||
      !this.nationality ||
      !this.phoneNb ||
      !this.address ||
      !this.email ||
      !this.password ||
      !this.confirmPassword
    )
      this.toastrService.danger('Please fill all fields', 'Registration Error');
    else if (this.password != this.confirmPassword)
      this.toastrService.danger('Password Mismatch', 'Registration Error');
    else {
      let json = {
        firstName: this.firstName,
        lastName: this.lastName,
        birthday:
          this.birthday.getDate() +
          '-' +
          (this.birthday.getMonth() + 1) +
          '-' +
          this.birthday.getFullYear(),
        nationality: this.nationality,
        email: this.email,
        phoneNb: this.phoneNb,
        address: this.address,
        password: this.password,
      };

      // console.log(json);
      this.loginService.login(json)
      .then(() => {
        this.toastrService.success('User Added', 'Registration Complete');
        setTimeout(() => {
          this.router.navigate(['auth/login']);
        }, 1500);
      })
      .catch(() => {
        this.toastrService.danger(
          'Something went wrong',
          'Registration Error'
        );
      });
    }
  }

  constructor(
    private toastrService: NbToastrService,
    private loginService: LoginService,
    private router: Router
  ) {}
}
