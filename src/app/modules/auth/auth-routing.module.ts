import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { AuthNotAuthorizeComponent } from './pages/auth-not-authorize/auth-not-authorize.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthLoginComponent },
  { path: 'unathorized', component: AuthNotAuthorizeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
