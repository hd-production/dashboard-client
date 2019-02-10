import {Injectable} from '@angular/core';
import {LoginForm} from './models/login-form';
import {RegisterForm} from './models/register-form';
import {Md5} from 'ts-md5';

@Injectable()
export class AuthService {


  public login(loginForm: LoginForm): void {
    const loginData = this.hashPassword(loginForm);
    console.log(JSON.stringify(loginData));
  }

  public register(registerForm: RegisterForm): void {
    const loginData = this.hashPassword(registerForm);
    console.log(JSON.stringify(loginData));
  }

  public logout(): void {

  }

  private hashPassword(form: LoginForm | RegisterForm) {
    return {
      ...form,
      password: undefined,
      pwdHash: Md5.hashStr(form.password)
    };
  }

}
