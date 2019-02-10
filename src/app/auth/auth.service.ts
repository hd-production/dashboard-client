import {Injectable} from '@angular/core';
import {LoginForm} from './models/login-form';
import {RegisterForm} from './models/register-form';
import {Md5} from 'ts-md5';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {switchMap} from 'rxjs/operators';
import {StorageService} from '../services/storage.service';
import {LoginResponse} from './models/login-response';
import {empty} from 'rxjs/internal/observable/empty';

const USERS_URL = `${environment.api.getUrl()}/users`;
const SESSIONS_URL = `${environment.api.getUrl()}/sessions`;

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  public login(loginForm: LoginForm): Observable<string> {
    const loginData = this.hashPassword(loginForm);
    return this.http.post(SESSIONS_URL, loginData).pipe(
      switchMap((res: LoginResponse) => {
        this.storageService.store('token', res.token);
        this.storageService.store('refreshToken', res.refreshToken);
        return empty();
      })
    );
  }

  public register(registerForm: RegisterForm): Observable<object> {
    const loginData = this.hashPassword(registerForm);
    return this.http.post(USERS_URL, loginData);
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
