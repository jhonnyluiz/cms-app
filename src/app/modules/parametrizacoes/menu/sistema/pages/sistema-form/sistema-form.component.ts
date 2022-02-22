import { ObjUtil } from './../../../../../../shared/util/obj.util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { BaseFormComponent } from 'src/app/shared/components/base/base-form.component';
import { Sistema } from 'src/app/shared/models/sistema.model';
import { SistemaConstant } from '../../sistema.constant';
import { SistemaService } from './../../../../../../shared/services/sistemas.service';
import { CrudEnum } from './../../../../../../shared/types/crud.enum';

@Component({
  selector: 'app-sistema-form',
  templateUrl: './sistema-form.component.html',
  styleUrls: ['./sistema-form.component.scss']
})
export class SistemaFormComponent extends BaseFormComponent<Sistema, SistemaService> implements OnInit {

  existsCodigo: boolean = false;

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected sistemaService: SistemaService,
    protected messageService: MessageService,
    protected confirmationService: ConfirmationService,
  ) {
    super(router, activatedRoute, sistemaService, messageService, confirmationService, new Sistema(), new SistemaConstant());
  }

  ngOnInit(): void {
    this.execInitialFunctions();
  }

  public initForm() {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      codigo: new FormControl({value:'', disabled: CrudEnum.UPDATE.equals(this.operacao)}, [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[a-zA-Z]+[a-zA-Z0-9_]*')]),
      url: new FormControl('', [Validators.pattern('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})')]),
      descricao: new FormControl(''),
      typeSituacao: new FormControl({ value: 'ATIVO', disabled: CrudEnum.CREATE.equals(this.operacao) }),
    });
    this.form.get('codigo').valueChanges.subscribe(this.codigoToUpper)
  }

  protected getDataCreate(): Sistema {
    const e = super.getDataCreate();
    e.typeSituacao = this.getValue('typeSituacao');
    return e;
  }

  public codigoToUpper = (value: string) => {
    this.existsCodigo = false;
    if (ObjUtil.isNotEmpty(value)) {
      this.setValueNoEvent('codigo', value.toUpperCase());
      this.findCodigoExistente(value.toUpperCase());
    }
  }

  public findCodigoExistente = (value: string) => {
    if (this.form.get('codigo').valid && CrudEnum.CREATE.equals(this.operacao)) {
      this.sub(this.sistemaService.existsSistemaByCodigo(value).subscribe(res => {
        this.existsCodigo = res
        if (res) {
          this.form.get('codigo').setErrors({ notUnique: true });
          this.form.get('codigo').updateValueAndValidity({ onlySelf: false, emitEvent: false });
        } else {
          this.formIsValid();
          this.form.get('codigo').updateValueAndValidity({ onlySelf: false, emitEvent: false });
        }
      }));
    }
  }

}
