import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgPrimeComponentsModule } from './components/ng-prime-commons/ng-prime-components.module';
import { AuthGuard } from './guard/auth.guard';
import { SistemaService } from './services/sistemas.service';
import { BlankCenterComponent } from './template/blank-center/blank-center.component';
import { SidenavMenuComponent } from './template/sidenav-menu/sidenav-menu.component';



@NgModule({
  declarations: [
    BlankCenterComponent,
    SidenavMenuComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgPrimeComponentsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    BlankCenterComponent,
    SidenavMenuComponent,

    FormsModule,
    HttpClientModule,
    NgPrimeComponentsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    SistemaService,
    AuthGuard,
  ]
})
export class SharedComponentsModule { }
