import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './../../../../shared/shared-components.module';
import { SistemaFormComponent } from './pages/sistema-form/sistema-form.component';
import { SistemaListComponent } from './pages/sistema-list/sistema-list.component';
import { SistemaRoutingModule } from './sistema-routing.module';



@NgModule({
  declarations: [
    SistemaListComponent,
    SistemaFormComponent,
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    SharedComponentsModule
  ]
})
export class SistemaModule { }
