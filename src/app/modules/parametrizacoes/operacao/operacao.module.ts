import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacaoRoutingModule } from './operacao-routing.module';
import { OperacaoListComponent } from './pages/operacao-list/operacao-list.component';
import { OperacaoFormComponent } from './pages/operacao-form/operacao-form.component';


@NgModule({
  declarations: [
    OperacaoListComponent,
    OperacaoFormComponent
  ],
  imports: [
    CommonModule,
    OperacaoRoutingModule
  ]
})
export class OperacaoModule { }
