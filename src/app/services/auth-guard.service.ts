import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {StorageService} from './storage.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.isAuthorized();
  }

  public canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.isAuthorized();
  }

  private isAuthorized(): boolean | Observable<boolean> | Promise<boolean> {
    const token = this.storageService.get('token');
    if (!token) {
      this.router.navigate(['auth']);
      return false;
    }
    return true;
  }
}
