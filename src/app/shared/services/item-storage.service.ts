import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export abstract class ItemStorageService<T> extends LocalStorageService {

  constructor() {
    super();
  }

  public abstract getKey(): string;

  protected set(value: T): boolean {
    return this._set(this.getKey(), value);
  }

  protected get(): T {
    return this._get(this.getKey());
  }

  protected remove(): boolean {
    return this._remove(this.getKey());
  }
}
