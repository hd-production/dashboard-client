import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {StorageService} from './storage.service';
import {Router} from '@angular/router';
import {catchError, finalize, switchMap} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isRefreshTokenRequest = false;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.storageService.get('token');
    if (!!token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req).pipe(
      catchError((failure, caught) => {
        if (failure.status === 401 && !this.isRefreshTokenRequest) {
          this.isRefreshTokenRequest = true;
          return this.authService.refreshToken()
            .pipe(
              switchMap(() => next.handle(req)),
              catchError((err) => {
                this.logOut();
                return throwError(err);
              }),
              finalize(() => this.isRefreshTokenRequest = false)
            );
        }
        return throwError(failure);
      })
    );
  }

  private logOut() {
    this.storageService.clear();
    this.router.navigate(['/auth']);
  }
}
