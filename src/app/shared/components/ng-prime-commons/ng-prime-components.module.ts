import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    ButtonModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    ImageModule,
    PasswordModule,
    MenubarModule,
    ToastModule,
  ],
  exports: [
    ButtonModule,
    ImageModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule,
    MenubarModule,
    ToastModule,
  ]
})
export class NgPrimeComponentsModule { }
