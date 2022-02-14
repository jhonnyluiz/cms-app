import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtTokenDTO } from '../models/jwt-token.dto';
import { UsuarioLoginDTO } from '../models/usuario-login.dto';
import { AuthStorageService } from './auth-storage.service';

@Injectable()
export class AuthService {
  constructor(private router: Router, private http: HttpClient, private authStorageService: AuthStorageService) { }

  login(usuarioLoginDTO: UsuarioLoginDTO): Observable<JwtTokenDTO> {
    return this.http.post<JwtTokenDTO>(environment.serverUrl+'/auth/login', usuarioLoginDTO);
  }

  logout() {
    this.authStorageService.logout();
    this.router.navigate(['auth', 'login'])
  }
}
