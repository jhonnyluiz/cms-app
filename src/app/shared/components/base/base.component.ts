import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonPageConfig } from '../../models/common-page-config.model';
import { CrudEnum } from '../../types/crud.enum';
import { BaseConstant } from './base.constant';
export abstract class BaseComponent {

  private _operacao: CrudEnum;
  private _pageConfig: CommonPageConfig;
  private _loading: boolean = true;
  private _subscriptionsList: Subscription[] = [];

  constructor(protected activatedRoute: ActivatedRoute, constants: BaseConstant) {
    this._operacao = this.activatedRoute.snapshot.data.operacao;
    this._pageConfig = constants.getPageConfig(this.operacao.codigo);
  }


  /**
   * ## NÃO SOBRESCREVER ##
   * Adicionar Subscriptions para uma lista. Usado para Unsubscribe ao destruir component.
   *
   * @param s
   * @returns void
   */
  protected sub = (s: Subscription) => this._subscriptionsList.push(s);

  /**
   * ## NÃO SOBRESCREVER ##
   * Executar este método para Unsubscribe de elements usados no component.
   *
   * @returns void
   */
  protected unsubscribeList = (): void => this._subscriptionsList.forEach(s => s.unsubscribe());

  /**
   * ## NÃO SOBRESCREVER ##
   * Iniciar o loading de um component;
   *
   * @returns void
   */
  protected loading = () => this._loading = true;

  /**
   * ## NÃO SOBRESCREVER ##
   * Parar o loading de um component;
   * @returns void
   */
  protected loaded = () => this._loading = false;

  /**
   * #######################
   * ## Getters e Setters ##
   * #######################
   */

  /**
   * ## NÃO SOBRESCREVER ##
   * Retorna a operação realizada na página.
   */
  get operacao(): CrudEnum { return this._operacao; }
  protected setOperacao(o: CrudEnum) { this._operacao = o; }

  /**
    * ## NÃO SOBRESCREVER ##
    * Retorna os dados de configuração da página;
    */
  public get pageConfig(): CommonPageConfig { return this._pageConfig }

  /**
   * ## NÃO SOBRESCREVER ##
   * Variável que indica se um component está em loading;
   *
   * @returns boolean
   */
  public get isLoading(): boolean { return this._loading };
}
