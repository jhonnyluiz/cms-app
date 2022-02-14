import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthStorageService } from './../../modules/auth/services/auth-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthStorageService, private router: Router) { }

  canActivate() {
    if(!this.authService.loggedIn) {
      this.router.navigate(['auth', 'login'])
    } else {
      return true;
    }
  }
}
