import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStorageService } from '../services/auth-storage.service';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: AuthStorageService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.loggedIn) {
      const jwt = this.authService.getToken();
      const authRequest = req.clone({ setHeaders: { 'Authorization': `Bearer ${jwt.token}` } });
      return next.handle(authRequest);
    } else {
      this.router.navigate(['auth', 'login']);
      return next.handle(req);
    }
  }
}
