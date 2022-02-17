import { PaginadorCustomComponent } from './../../../../../../shared/components/paginador-custom/paginador-custom.component';
import { AfterViewInit, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonListConfig } from './../../../../../../shared/models/common-list-config.model';
import { Page } from './../../../../../../shared/models/page.model';
import { Sistema } from './../../../../../../shared/models/sistema.model';
import { SistemaService } from './../../../../../../shared/services/sistemas.service';
import { CommonListComponent } from './../../../../../../shared/template/common-list/common-list.component';

@Component({
  selector: 'app-sistema-list',
  templateUrl: './sistema-list.component.html',
  styleUrls: ['./sistema-list.component.scss']
})
export class SistemaListComponent implements AfterViewInit, OnDestroy {

  _subscriptionsList: Subscription[] = [];
  sistemaListConfig = new CommonListConfig('Sistemas', 'Listagem de sistemas', '/parametrizacoes/menu/sistemas');

  _loading: boolean = true;
  datasource: Page<Sistema>;
  listSelected: Sistema[] = [];
  columns = [{label: ' ', class: 'table-w-1'}, {label: 'Código', classStyle: 'table-w-2'}, {label: 'Nome', classStyle: ''}, {label: 'Situação', classStyle: 'table-w-2'}, {label: 'Ações', classStyle: 'table-w-2'}]
  skeletonTable = { columns: this.columns, data: [{}]}

  @ViewChild('commonList') commonList: CommonListComponent;
  @ViewChild("paginador") paginador: PaginadorCustomComponent;

  constructor(
    private sistemaService: SistemaService,
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => this.loadDatasource(), 2000);
  }

  ngOnDestroy(): void {
    this.unsubscribeList();
  }

  public loadDatasource() {
    this.loading();
    this.sub(this.sistemaService.getPagedList(this.getPaginador().getPage(), this.getPaginador().getSize()).subscribe(this.setDatasource));
  }

  public getPaginador(): PaginadorCustomComponent {
    return this.paginador;
  }

  public setDatasource = (res: Page<Sistema>): void  => {
    this.datasource = res;
    this.paginador.setTotalElements(res.numberOfElements);
    this.loaded();
  }

  isRowSelectable(event) {
    return !(event.data.typeSituacao === 'Ativo');
  }

  enableExcluir(event): void {
    this.commonList.changeBtnDisabled(1, this.listSelected.length > 0 ? false : true);
  }

  protected sub = (s: Subscription) => this._subscriptionsList.push(s);
  protected unsubscribeList = (): void => this._subscriptionsList.forEach(s => s.unsubscribe());

  protected loading = () => this._loading = true;
  protected loaded = () => this._loading = false;
  public get isLoading(): boolean { return this._loading};

}
