import { Router } from '@angular/router';
import { JwtTokenDTO } from './../../models/jwt-token.dto';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { AuthStorageService } from '../../services/auth-storage.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit, OnDestroy {

  sub: Subscription[] =[];
  form: FormGroup;
  constructor(private router: Router, private authService: AuthService, private authStorageService: AuthStorageService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnDestroy(): void {
    this.sub.forEach(s => s.unsubscribe());
  }

  login() {
    if (this._validarFormulario()) {
      this.sub.push(this.authService.login(this.form.value).subscribe(t => this.logged(t)));
    }
  }

  private logged = (token: JwtTokenDTO) =>  {
    this.authStorageService.setToken(token);
    this.router.navigate(['home']);
  }

  private _validarFormulario() {
   if (this.form.valid && this.formIsValid()) {
      return true;
    } else {
      Object.keys(this.form.controls).forEach(key => this.form.get(key).markAsDirty());
      this.showErrorsValidation();
      return false;
    }
  }

   /**
   * Validação extra para verificação de um formulário inválido.
   *
   * @returns boolean
   */
    formIsValid(): boolean {return true;}

    /**
     * Método adicional para exibição de campos não validos no formulário.
     */
    showErrorsValidation() {}

    public showMessageRequired(field): boolean {
      return this.form.get(field).invalid && this.form.get(field).dirty;
    }
}
