import { CrudEnum } from './../../../../shared/types/crud.enum';
import { SistemaFormComponent } from './pages/sistema-form/sistema-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemaListComponent } from './pages/sistema-list/sistema-list.component';
import { SistemaResolver } from './resolvers/sistema.resolver';
import { SistemaManagerComponent } from './pages/sistema-manager/sistema-manager.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SistemaListComponent, data: { operacao: CrudEnum.READ } },
  { path: 'new', component: SistemaFormComponent, data: { operacao: CrudEnum.CREATE } },
  { path: ':id/edit', component: SistemaFormComponent, data: { operacao: CrudEnum.UPDATE }, resolve: { entity: SistemaResolver } },
  { path: ':id/manager', component: SistemaManagerComponent, data: { operacao: CrudEnum.MANAGER }, resolve: { entity: SistemaResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
