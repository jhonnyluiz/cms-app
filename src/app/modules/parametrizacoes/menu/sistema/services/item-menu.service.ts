import { HttpClient } from '@angular/common/http';
import { ItemMenu } from './../../../../../shared/models/item-menu.model';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable()
export class ItemMenuService extends BaseService<ItemMenu>{

  constructor(public http: HttpClient) {
    super(http);
  }

  public getPathModule(): string {
    return 'item-menu/';
  }
}
