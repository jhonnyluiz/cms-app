import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilListComponent } from './pages/perfil-list/perfil-list.component';
import { PerfilFormComponent } from './pages/perfil-form/perfil-form.component';


@NgModule({
  declarations: [
    PerfilListComponent,
    PerfilFormComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
