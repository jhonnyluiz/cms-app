import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItensMenuRoutingModule } from './itens-menu-routing.module';
import { ItensMenuListComponent } from './pages/itens-menu-list/itens-menu-list.component';
import { ItensMenuFormComponent } from './pages/itens-menu-form/itens-menu-form.component';


@NgModule({
  declarations: [
    ItensMenuListComponent,
    ItensMenuFormComponent
  ],
  imports: [
    CommonModule,
    ItensMenuRoutingModule
  ]
})
export class ItensMenuModule { }
