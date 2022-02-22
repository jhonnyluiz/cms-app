import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { PaginatorModule } from 'primeng/paginator';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TreeModule } from 'primeng/tree';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    AutoCompleteModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    DialogModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    ImageModule,
    PasswordModule,
    PaginatorModule,
    ProgressBarModule,
    SkeletonModule,
    MenubarModule,
    TableModule,
    TreeModule,
    ToastModule,
  ],
  exports: [
    AutoCompleteModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    DialogModule,
    ImageModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule,
    PaginatorModule,
    ProgressBarModule,
    RadioButtonModule,
    SkeletonModule,
    MenubarModule,
    TableModule,
    TreeModule,
    ToastModule,
  ]
})
export class NgPrimeComponentsModule { }
