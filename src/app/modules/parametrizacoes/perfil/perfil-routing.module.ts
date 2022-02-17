import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilListComponent } from './pages/perfil-list/perfil-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PerfilListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
