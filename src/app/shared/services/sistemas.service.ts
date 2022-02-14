import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sistema } from '../models/sistema.model';
import { BaseService } from './base.service';

@Injectable()
export class SistemaService extends BaseService<Sistema> {


  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  public getPathModule(): string {
    return '/sistemas';
  }

  public findByCodSistema(codSistema: string): Observable<Sistema> {
    return this.httpClient.get<Sistema>(this.baseUrl + '/byCodigo/' + codSistema, {headers: this.headers});
  }
}
