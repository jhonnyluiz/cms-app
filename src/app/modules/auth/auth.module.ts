import { LocalStorageService } from './../../shared/services/local-storage.service';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './../../shared/shared-components.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { AuthNotAuthorizeComponent } from './pages/auth-not-authorize/auth-not-authorize.component';
import { AuthStorageService } from './services/auth-storage.service';



@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthNotAuthorizeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedComponentsModule,
  ],
  providers: [
    AuthService,
    AuthStorageService,
  ]
})
export class AuthModule { }
