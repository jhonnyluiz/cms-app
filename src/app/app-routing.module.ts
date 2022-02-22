import { AuthGuard } from './shared/guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavMenuComponent } from './shared/template/sidenav-menu/sidenav-menu.component';
import { SistemaResolver } from './shared/resolvers/sistema.resolver';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule), },
  {
    path: '',
    resolve: {sistema: SistemaResolver},
    canActivate: [AuthGuard],
    component: SidenavMenuComponent,
    children: [
      { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
      {
        path: 'parametrizacoes',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'menu',
            canActivate: [AuthGuard],
            children: [
              { path: 'sistemas', loadChildren: () => import('./modules/parametrizacoes/menu/sistema/sistema.module').then(m => m.SistemaModule), canActivate: [AuthGuard]},
            ]
          },
          { path: 'operacoes', loadChildren: () => import('./modules/parametrizacoes/operacao/operacao.module').then(m => m.OperacaoModule), canActivate: [AuthGuard],},
          { path: 'perfis', loadChildren: () => import('./modules/parametrizacoes/perfil/perfil.module').then(m => m.PerfilModule), canActivate: [AuthGuard]},
        ]
      },
      { path: '**', component: NotFoundComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
