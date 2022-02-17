import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({providedIn: 'root'})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private messageService: MessageService, private router: Router) { }


  handleError(httpError: HttpErrorResponse | any): void {
    if (httpError.status === 400) {
      this.messageService.add({key: 'defaultError', severity:'error', summary: 'Dados Inválidos', detail: httpError.error.message});
    } else if (httpError.status === 401) {
      this.messageService.add({key: 'defaultError', severity:'error', summary: 'Falha no Login', detail: 'Não foi possível validar seu usuário'});
      this.router.navigate(['auth', 'login']);
    } else if (httpError.status === 403) {
      this.messageService.add({key: 'defaultError', severity:'error', summary: 'Sem permissão', detail: 'Você não possui permissão para esta funcionalidade'});
    } else if (httpError.status === 500) {
      this.messageService.add({key: 'defaultError', severity:'error', summary: 'Server Error', detail: httpError.error.message});
    } else {
      console.log(httpError);
    }
  }
}
