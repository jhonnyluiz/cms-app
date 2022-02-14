import { AuthGuard } from './shared/guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavMenuComponent } from './shared/template/sidenav-menu/sidenav-menu.component';
import { SistemaResolver } from './shared/resolvers/sistema.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule), },
  {
    path: '',
    resolve: {sistema: SistemaResolver},
    canActivate: [AuthGuard],
    component: SidenavMenuComponent,
    children: [
      { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
