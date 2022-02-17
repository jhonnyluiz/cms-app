import { Injectable } from '@angular/core';
import { ItemStorageService } from 'src/app/shared/services/item-storage.service';
import { JwtTokenDTO } from './../models/jwt-token.dto';
import jwt_decode from "jwt-decode";

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

  getPayload() {
    try {
      return jwt_decode(this.getToken().token);
    } catch (Error) {
      return null;
    }
  }

  logout() {
    this.remove();
  }

  get loggedIn() {
    const tokenDTO = this.getToken();
    if (tokenDTO) {
      const payload = this.getPayload();
      if (new Date(payload['exp']*1000) > new Date()) {
        return true;
      } else {
        this.logout();
        return false;
      }
    } else {
      return false;
    }
  }
}
