import { Injectable } from '@angular/core';
import { ItemStorageService } from 'src/app/shared/services/item-storage.service';
import { JwtTokenDTO } from './../models/jwt-token.dto';

@Injectable()
export class AuthStorageService extends ItemStorageService<JwtTokenDTO> {

  constructor() {
    super();
  }

  public getKey(): string {
    return 'authToken';
  }

  setToken(tokenDTO: JwtTokenDTO) {
    return this.set(tokenDTO);
  }

  getToken() {
    return this.get();
  }

  logout() {
    this.remove();
  }

  get loggedIn() {
    const tokenDTO = this.getToken();
    if(tokenDTO) {
      return true;
    } else {
      return false;
    }
  }
}
