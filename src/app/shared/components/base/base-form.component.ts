import { ThisReceiver } from '@angular/compiler';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActionButton } from '../../models/action-button.model';
import { BaseModel } from '../../models/base.model';
import { CommonPageConfig } from '../../models/common-page-config.model';
import { BaseService } from '../../services/base.service';
import { CrudEnum } from '../../types/crud.enum';
import { ObjUtil } from '../../util/obj.util';
import { BaseComponent } from './base.component';
import { BaseConstant } from './base.constant';

/**
 * Classe responsável por conter os métodos padrões para um componente de criação/edição.
 *
 * @date 21/12/2021
 * @author Jhonny Luiz Cabral
 */
export abstract class BaseFormComponent<T extends BaseModel<T>, S extends BaseService<T>> extends BaseComponent {

  private _entity: T;
  private _actions: ActionButton[] = [ActionButton.btnCancelar(() => this._cancelar()), ActionButton.btnSalvar(() => this._save())];
  private _showChangeCancelar = false;
  form: FormGroup;

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected service: S,
    protected messageService: MessageService,
    protected confirmationService: ConfirmationService,
    protected entityInstance: T,
    constants: BaseConstant) {
    super(activatedRoute, constants);
    this._entity = this.activatedRoute.snapshot.data.entity;
  }

  protected execInitialFunctions(): void {
    this.initForm();
    this.setDataFormEdit();
  }

  public goToList():void {
    this.router.navigate([this.pageConfig.baseUrl, 'list']);
  }

  /**
   * **PADRÃO - BOTÃO SALVAR**
   * Responsável por realizar a criação/alteração dos dados do formulário. Este
   * método identifica se é uma operação de criação ou alteração através da
   * informação repassada na rota, confirada com o atributo 'operacao'.
   */
  private _save() {
    this.loading();
    if (this._validarFormulario()) {
      if (this.isCreate) {
        this._create();
      } else {
        this._update(this.entity['id']);
      }
    } else {
      this.loaded();
    }

  }

  protected setDataFormEdit(): void {
    if (!this.isCreate && ObjUtil.isNotNull(this.entity)) {
      this.form.patchValue({ ...this.entity });
      this.form.updateValueAndValidity();
      this.setDataFormEditExtra();
    }
  }

  protected setDataFormEditExtra(): void {}

  /**
   * Execução de validação do formulário de acordo com os campos obrigatórios.
   *
   * @returns
   */
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
  protected formIsValid(): boolean { return true; }

  /**
   * Método adicional para exibição de campos não validos no formulário.
   */
  protected showErrorsValidation() {
    this.messageService.add({key: 'defaultError', severity:'warn', summary: 'Atenção', detail: `É necessário preencher todos os campos obrigatórios.`});
  }

  /**
   * Executa operação de criação do serviço. Realizando a chamado do método de
   * successo após o retorno metodo:'showMessageSuccess()'.
   */
  private _create() {
    this.sub(
      this.service.create(this.getDataCreate()).subscribe(
        res => {
          this._entity = res;
          this.loaded();
          this.showMessageSuccess(res);
          this.goToList();
        },
        err => {
          console.log(err);
          this.loaded()
        }
      )
    );
  }

  /**
   * Executa operação de alteração do serviço. Realizando a chamado do método de
   * successo após o retorno metodo:'showMessageSuccess()'.
   */
  private _update(id: number) {
    const data = this.getDataUpdate();
    this.sub(
      this.service.update(data, this._entity['id']).subscribe(
        res => {
          this._entity = res;
          this.loaded();
          this.showMessageSuccess(res);
          this.goToList();
        },
        err => {
          console.error(err);
          this.loaded()
        })
    );
  }

  /**
   * Método responsável por retornar o objeto a ser criado.
   *
   * @returns entidade do tipo: T
   */
  protected getDataCreate(): T {
    return this.mapperDataCreate(this.entityInstance.of(this.form.value));
  }

  protected mapperDataCreate(entity: T): T {
    return entity;
  }

  /**
   * Método responsável por retornar o objeto a ser alterado. Por padrão
   * ele retornará o mesmo método de criação, caso haja alguma mudança de
   * dados, é necessário sua reescrita.
   *
   * @returns entidade do tipo: T
   */
  public getDataUpdate(): T {
    return this.getDataCreate();
  }

  /**
   * Método responsável por exibir a mensagem de sucesso ao criar/editar um
   * registro.
   *
   * @param entity
   */
  protected showMessageSuccess(entity: T) {
    this.messageService.add({key: 'defaultError', severity:'success', summary: 'Sucesso', detail: `${this.operacao.descricao} realizada com sucesso.`});
  }

  /**
   * **PADRÃO - BOTÃO CANCELAR**
   * Responsável por voltar a pagina de listagem. Caso o formulário tenha
   * sofrido alguma alteração o mesmo irá exibir um alerta de confirmação
   * de cancelamento, representado pela implementação do método
   * openConfirmCancelarDialog();
   */
  private _cancelar(): void {
    if (this.formHaveModifications()) {
      this.openConfirmCancelarDialog();
    } else {
      this.redirectCancelar();
    }
  }

  /**
   * Redirecionamento para a rota de listagem.
   */
  private redirectCancelar = () => {
    this.router.navigate([this.pageConfig.baseUrl, 'list'])
  }

  /**
   * Dialog de Confirmação de Cancelamento. Implemente este método para
   * exibir o dialog de alerta, caso o formulário tenha sofrido alguma
   * alteração.
   */
  private openConfirmCancelarDialog() {
    this.confirmationService.confirm({
      message: 'Deseja sair sem salvar os dados?',
      header: 'Cancelar',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      icon: 'pi pi-exclamation-triangle',
      accept: () => { this.goToList() },
      reject: (type) => { }
    });
  }


  /**
   * Este método verifica se o formulário sofreu alguma alteração,
   * utilizandos da implementação 'dirty' disponível nos inputs do angular.
   *
   * @returns boolean
   */
  private formHaveModifications(): boolean {
    if (ObjUtil.isNotEmpty(this.form)) {
      return Object.keys(this.form.controls).filter(key => this.form.get(key).dirty).length > 0 || this._showChangeCancelar;
    } else {
      return this._showChangeCancelar;
    }
  }

  public getCaracteres(field: string): number {
    const value = this.form.get(field).value;
    return value ? Number.parseInt(value.length) : 0;
  }

  public fieldMessageRequired(field, typeError: string = 'required'): boolean {
    const erros = this.form.get(field).errors;
    console.log(field + JSON.stringify(erros))
    return this.form.get(field).invalid && this.form.get(field).dirty && ObjUtil.isNotEmpty(erros[typeError]);
  }

  // public fieldMessageRequired(field): boolean {
  //   return this.form.get(field).invalid && this.form.get(field).dirty && this.form.get(field).errors;
  // }

  abstract initForm(): void;

  /**
   * Método responsável por setar a informação de que houve alteração na tela. Usado para mostar o modal de cancelar.
   *
   * @param value
   */
  public changeShowCancelar(value: boolean): void {
    this._showChangeCancelar = value;
  }

  /**
   * ## NÃO SOBRESCREVER ##
   * Utilize este método para resgatar o valor de um campo do formulário.
   *
   * @param field
   * @returns value
   */
  public getValue(field: string): any {
    return this.form.get(field).value;
  }

  /**
   * ## NÃO SOBRESCREVER ##
   * Método responsável, por setar um valor em um campo do formulário.
   *
   * @param field
   * @param value
   */
  public setValue(field: string, value: any): void {
    this.form.get(field).setValue(value);
  }

  /**
   * ## NÃO SOBRESCREVER ##
   * Método responsável, por setar um valor em um campo do formulário, porém sem emitir um evento de 'change'.
   *
   * @param field
   * @param value
   */
  public setValueNoEvent(field: string, value: any): void {
    this.form.get(field).setValue(value, { onlySelf: false, emitEvent: false });
  }

  /**
   * ## NÃO SOBRESCREVER ##
   * Realiza a comparação de valor para um campo do formulário.
   *
   * @param field
   * @param value
   * @returns
   */
  public fieldEquals(field: string, value: any): boolean {
    return this.form.get(field).value == value;
  }


  /**
   * #######################
   * ## Getters e Setters ##
   * #######################
   */

  get entity(): T { return this._entity; }

  get actions(): ActionButton[] { return this._actions; }

  get isCreate(): boolean { return CrudEnum.CREATE.equals(this.operacao) }
  get isUpdate(): boolean { return CrudEnum.UPDATE.equals(this.operacao) }
}
