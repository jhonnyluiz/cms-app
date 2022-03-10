import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BaseModel } from '../../models/base.model';
import { BaseService } from '../../services/base.service';
import { CrudEnum } from './../../types/crud.enum';
import { EventEnum } from './../../types/event.enum';
import { BaseFormComponent } from './base-form.component';
import { BaseConstant } from './base.constant';

/**
 * Classe responsável por conter os métodos padrões para um componente de criação/edição.
 *
 * @date 09/03/2022
 * @author Jhonny Luiz Cabral
 */
export abstract class BaseFormDialogComponent<T extends BaseModel<T>, S extends BaseService<T>> extends BaseFormComponent<T, S> {

  title: string;
  form: FormGroup;
  display: boolean = false;

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected service: S,
    protected messageService: MessageService,
    protected confirmationService: ConfirmationService,
    protected entityInstance: T,
    constants: BaseConstant) {
    super(router, activatedRoute, service, messageService, confirmationService, entityInstance, constants);
    this.setEntity(null);
  }

  public goToSuccess(): void {
    this.setDisplay(false);
    this.execCallback(EventEnum.SUCCESS_DIALOG);
  }

  public redirectCancelar(): void {
    this.limparForm();
    this.setDisplay(false);
  }

  public openDialog(entity: T = null, operacao: CrudEnum = CrudEnum.CREATE) {
    this.setDisplay(true);
    this.setOperacao(operacao);
    this.setEntity(entity);
    this.execInitialFunctions();
  }

  public closeDialog(): void {
    this.setDisplay(false);
    this.execCallback(EventEnum.CANCEL_DIALOG);
  }

  abstract execCallback(event: EventEnum): void;

  private setDisplay(value: boolean) {
    this.display = value;
  }

}
