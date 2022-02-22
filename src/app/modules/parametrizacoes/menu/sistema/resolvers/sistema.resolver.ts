import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Sistema } from './../../../../../shared/models/sistema.model';
import { SistemaService } from './../../../../../shared/services/sistemas.service';

@Injectable({ providedIn: 'root' })
export class SistemaResolver implements Resolve<Sistema> {

  constructor(private sistemaService: SistemaService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Sistema> {
    return this.sistemaService.getById(route.params.id);
  }
}
