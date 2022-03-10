import { MessageService } from 'primeng/api';
import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'src/app/shared/components/base/base-list.component';
import { Sistema } from './../../../../../../shared/models/sistema.model';
import { SistemaService } from './../../../../../../shared/services/sistemas.service';
import { CommonListComponent } from './../../../../../../shared/template/common-list/common-list.component';
import { SistemaConstant } from './../../sistema.constant';

@Component({
  selector: 'app-sistema-list',
  templateUrl: './sistema-list.component.html',
  styleUrls: ['./sistema-list.component.scss']
})
export class SistemaListComponent extends BaseListComponent<Sistema, SistemaService> implements AfterViewInit, OnDestroy {

  @ViewChild('commonList') commonList: CommonListComponent;

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected messageService: MessageService,
    protected sistemaService: SistemaService,
  ) {
    super(router, activatedRoute, messageService, sistemaService, new SistemaConstant());
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribeList();
  }

  protected getCommonList(): CommonListComponent {
    return this.commonList;
  }

  public goToGerenciar(entity: Sistema): void {
    this.router.navigate([this.pageConfig.baseUrl, entity.id, 'manager']);
  }
}
