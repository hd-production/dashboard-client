import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {StorageService} from './storage.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private storageService: StorageService
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this._isAuthorized();
  }

  public canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this._isAuthorized();
  }

  private _isAuthorized(): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }
}
