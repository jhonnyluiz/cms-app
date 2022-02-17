import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItensMenuFormComponent } from './pages/itens-menu-form/itens-menu-form.component';
import { ItensMenuListComponent } from './pages/itens-menu-list/itens-menu-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ItensMenuListComponent },
  { path: 'new', component: ItensMenuFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItensMenuRoutingModule { }
