import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from '../modules/auth/interceptor/auth.interceptor';
import { NgPrimeComponentsModule } from './components/ng-prime-commons/ng-prime-components.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PaginadorCustomComponent } from './components/paginador-custom/paginador-custom.component';
import { TdTypeSituacaoComponent } from './components/td-type-situacao/td-type-situacao.component';
import { AuthGuard } from './guard/auth.guard';
import { SistemaService } from './services/sistemas.service';
import { BlankCenterComponent } from './template/blank-center/blank-center.component';
import { CommonPageComponent } from './template/common-page/common-page.component';
import { SidenavMenuComponent } from './template/sidenav-menu/sidenav-menu.component';
import { CommonListComponent } from './template/common-list/common-list.component';
import { ConfirmationService, TreeDragDropService } from 'primeng/api';



@NgModule({
  declarations: [
    BlankCenterComponent,
    SidenavMenuComponent,
    CommonPageComponent,
    CommonListComponent,
    NotFoundComponent,
    PaginadorCustomComponent,
    TdTypeSituacaoComponent,
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
    CommonPageComponent,
    CommonListComponent,
    SidenavMenuComponent,
    NotFoundComponent,

    FormsModule,
    HttpClientModule,
    NgPrimeComponentsModule,
    PaginadorCustomComponent,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    SistemaService,
    ConfirmationService,
    TreeDragDropService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class SharedComponentsModule { }
