import { Subscription } from 'rxjs';
export abstract class BaseComponent {

  private _loading: boolean = true;
  private _subscriptionsList: Subscription[] = [];

  constructor() { }


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
   * Parar o loaind de um component;
   * @returns void
   */
  protected loaded = () => this._loading = false;

  /**
   * ## NÃO SOBRESCREVER ##
   * Variável que indica se um component está em loading;
   *
   * @returns boolean
   */
  public get isLoading(): boolean { return this._loading };
}
