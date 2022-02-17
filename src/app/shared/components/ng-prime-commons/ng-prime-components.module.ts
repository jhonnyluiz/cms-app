import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';
import { PaginatorModule } from 'primeng/paginator';
import {SkeletonModule} from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    BreadcrumbModule,
    ButtonModule,
    CardModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    ImageModule,
    PasswordModule,
    PaginatorModule,
    ProgressBarModule,
    SkeletonModule,
    MenubarModule,
    TableModule,
    ToastModule,
  ],
  exports: [
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    ImageModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule,
    PaginatorModule,
    ProgressBarModule,
    SkeletonModule,
    MenubarModule,
    TableModule,
    ToastModule,
  ]
})
export class NgPrimeComponentsModule { }
