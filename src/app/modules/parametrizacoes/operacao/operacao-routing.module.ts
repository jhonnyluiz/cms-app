import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacaoFormComponent } from './pages/operacao-form/operacao-form.component';
import { OperacaoListComponent } from './pages/operacao-list/operacao-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: OperacaoListComponent },
  { path: 'new', component:  OperacaoFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacaoRoutingModule { }
