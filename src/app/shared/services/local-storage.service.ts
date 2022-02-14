import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class LocalStorageService {

  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }

  protected _set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  protected _get(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key));
    }
    return null;
  }

  protected _remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  public clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}
