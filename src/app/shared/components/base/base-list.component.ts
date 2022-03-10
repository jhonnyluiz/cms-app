import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from 'primeng/api';
import { ActionButton } from '../../models/action-button.model';
import { BaseModel } from "../../models/base.model";
import { ColumnsTable } from "../../models/columns-table.model";
import { Page } from "../../models/page.model";
import { BaseService } from "../../services/base.service";
import { CommonListComponent } from '../../template/common-list/common-list.component';
import { CommonPageComponent } from "../../template/common-page/common-page.component";
import { CrudEnum } from "../../types/crud.enum";
import { PaginadorCustomComponent } from "../paginador-custom/paginador-custom.component";
import { BaseComponent } from "./base.component";
import { BaseConstant } from './base.constant';

export abstract class BaseListComponent<T extends BaseModel<T>, S extends BaseService<T>> extends BaseComponent {

  private _datasource: Page<T>;
  private _listSelected: T[] = [];
  private _columns: ColumnsTable[] = []
  private _skeletonTable = { columns: this._columns, data: [{}] }
  private _actions: ActionButton[] = [ActionButton.btnNovo(() => this.goToNovo()), ActionButton.btnExcluir(() => this.execExcluir())];

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected messageService: MessageService,
    protected service: S,
    constants: BaseConstant) {
    super(activatedRoute, constants);
    this._columns = constants.colunsTableList;
  }

  /**
   * Este método deve ser implementado retornando o seu component de paginação;
   */
  protected abstract getCommonList(): CommonListComponent;

  /**
   * Método responsável por retornar o seu component de paginação;
   */
  protected getPaginador(): PaginadorCustomComponent {
    return this.getCommonList().paginador;
  }


  /**
   * Método responsável por retornar o seu component CommonPage;
   */
  protected getCommonPage(): CommonPageComponent {
    return this.getCommonList().commonPage;
  };


  // ######################
  // # METODOS DATASOURCE #
  // ######################

  /**
   * ## NÃO SOBRESCREVER ##
   * Realiza nova consulta de dados de listagem;
   */
  public loadDatasource() {
    this.loading();
    this.sub(this.service.getPagedList(this.getPaginador().getPage(), this.getPaginador().getSize()).subscribe(this._setDatasource));
  }

  /**
   * Realiza a atualização dos dados do datasource e também dos dados de paginação.
   * @param res
   */
  private _setDatasource = (res: Page<T>): void => {
    this._datasource = res;
    this.getPaginador().setTotalElements(res.totalElements);
    this.loaded();
  }


  // ###############################
  // # METODOS DE REDIRECIONAMENTO #
  // ###############################

  /**
   * Método responsável por redirecionar para pagina de criação de um novo registro;
   */
  public goToNovo = () => { this.router.navigate([this.pageConfig.baseUrl, 'new']); }

  /**
   * Método responsável por redirecionar para pagina de edição do registro selecionado;
   * @param entity
   */
  public goToEditar = (entity: T) => { this.router.navigate([this.pageConfig.baseUrl, entity.id, 'edit']); }


  // ####################
  // # METODOS EXCLUSÃO #
  // ####################

  /**
   * Método responsável por realizar a validação de um item da lista. Retorna se ele pode ou não, ser excluido.
   * Por padrão este método utilizada a sua situação como inativa sendo possível exclusão.
   * **Sobrescreva** este método caso a definição de exclusão seja diferente.
   *
   * @param event
   * @returns boolean
   */
  public isRowSelectable(event): boolean {
    return !(event.data.typeSituacao === 'ATIVO');
  }

  /**
   * Método responsável por habilitar ou desabilitar Botão de Excluir itens.
   * @param event
   */
  public enableExcluir(event): void {
    this.getCommonPage().btnActions.forEach(btn => {
      if (ActionButton.btnExcluir(null).label === btn.label) {
        btn.disabled = this.listSelected.length > 0 ? false : true;
      }
    });
  }

  /**
   * ## NÃO SOBRESCREVER ##
   * Método responsável por realizar a execução de exclusão dos itens selecionados.
   */
  public execExcluir() {
    this.sub(this.service.deleteAll(this._listSelected.map(e => e.id)).subscribe(() => this.successExcluir()));
  }

  /**
   * Método responsável pela conclusão com sucesso da exclusão de items.
   *
   * @param response
   */
  private successExcluir() {
    this.messageService.add({ key: 'defaultError', severity: 'success', summary: 'Sucesso', detail: `${CrudEnum.DELETE} realizada com sucesso.` });
    this.loaded();
    this.loadDatasource();
  }

  // #######################
  // # METODOS GETS E SETS #
  // #######################

  /**
    * ## NÃO SOBRESCREVER ##
    * Retorna os dados de ações dos botões comuns;
    */
  public get actions(): ActionButton[] { return this._actions }

  /**
   * ## NÃO SOBRESCREVER ##
   * Retorna os dados do datasource;
   */
  public get datasource(): Page<T> { return this._datasource }

  /**
   * ## NÃO SOBRESCREVER ##
   * Retorna os dados da lista selecionada na table;
   */
  public get listSelected(): T[] { return this._listSelected }

  /**
   * ## NÃO SOBRESCREVER ##
   * Seta os dados da lista selecionada na table;
   */
  public set listSelected(values: T[]) { this._listSelected = values }

  /**
   * ## NÃO SOBRESCREVER ##
   * Retorna os dados das columns da table;
   */
  public get columns(): ColumnsTable[] { return this._columns }

  /**
   * ## NÃO SOBRESCREVER ##
   * Retorna os dados da table skeleton, usada no loading;
   */
  public get skeletonTable(): any { return this._skeletonTable }
}
