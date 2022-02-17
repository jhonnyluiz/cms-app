import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { SharedComponentsModule } from './../../shared/shared-components.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeDashboardComponent } from './pages/home-dashboard/home-dashboard.component';



@NgModule({
  declarations: [
    HomeDashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule,
  ],
  providers: [
    AuthGuard,
  ]
})
export class HomeModule { }
