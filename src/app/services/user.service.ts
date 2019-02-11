import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const USERS_URL = `${environment.api.getUrl()}/users`;

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  public getCurrentUser(): Observable<any> {
    return this.http.get(USERS_URL);
  }
}
