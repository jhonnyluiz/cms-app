import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ListBaseComponent } from 'src/app/shared/components/base/list-base.component';
import { Sistema } from './../../../../../../shared/models/sistema.model';
import { SistemaService } from './../../../../../../shared/services/sistemas.service';
import { CommonListComponent } from './../../../../../../shared/template/common-list/common-list.component';
import { SistemaConstant } from './../../sistema.constant';

@Component({
  selector: 'app-sistema-list',
  templateUrl: './sistema-list.component.html',
  styleUrls: ['./sistema-list.component.scss']
})
export class SistemaListComponent extends ListBaseComponent<Sistema, SistemaService> implements AfterViewInit, OnDestroy {

  @ViewChild('commonList') commonList: CommonListComponent;

  constructor(
    protected sistemaService: SistemaService,
    protected router: Router,
  ) {
    super(router, sistemaService, SistemaConstant.LIST_PAGE_CONFIG, SistemaConstant.COLS_TABLE_LIST);
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribeList();
  }

  protected getCommonList(): CommonListComponent {
    return this.commonList;
  }
}
