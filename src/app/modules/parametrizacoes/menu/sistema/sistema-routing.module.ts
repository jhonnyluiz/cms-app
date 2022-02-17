import { SistemaFormComponent } from './pages/sistema-form/sistema-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemaListComponent } from './pages/sistema-list/sistema-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SistemaListComponent },
  { path: 'new', component: SistemaFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
