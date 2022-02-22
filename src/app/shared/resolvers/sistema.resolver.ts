import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sistema } from '../models/sistema.model';
import { SistemaService } from '../services/sistemas.service';

@Injectable({ providedIn: 'root' })
export class SistemaResolver implements Resolve<Sistema> {

  constructor(private sistemaService: SistemaService) {}

  resolve(): Observable<Sistema> {
    return this.sistemaService.findByCodSistema(environment.codSistema);
  }
}
