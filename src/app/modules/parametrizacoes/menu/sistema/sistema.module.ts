import { ItemMenuService } from './services/item-menu.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './../../../../shared/shared-components.module';
import { SistemaFormComponent } from './pages/sistema-form/sistema-form.component';
import { SistemaListComponent } from './pages/sistema-list/sistema-list.component';
import { SistemaRoutingModule } from './sistema-routing.module';
import { SistemaManagerComponent } from './pages/sistema-manager/sistema-manager.component';
import { ItemMenuFormDialogComponent } from './components/item-menu-form-dialog/item-menu-form-dialog.component';



@NgModule({
  declarations: [
    SistemaListComponent,
    SistemaFormComponent,
    SistemaManagerComponent,
    ItemMenuFormDialogComponent,
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    SharedComponentsModule
  ],
  providers: [
    ItemMenuService,
  ]
})
export class SistemaModule { }
