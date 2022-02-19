import { AfterViewInit, Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { ListBaseComponent } from '../../components/base/list-base.component';
import { PaginadorCustomComponent } from '../../components/paginador-custom/paginador-custom.component';
import { CommonPageComponent } from '../common-page/common-page.component';

@Component({
  selector: 'common-list',
  templateUrl: './common-list.component.html',
  styleUrls: ['./common-list.component.scss']
})
export class CommonListComponent implements AfterViewInit {


  @ViewChild('commonPage') _commonPage: CommonPageComponent;
  @ViewChild("paginador") _paginador: PaginadorCustomComponent;
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;

  @Input() component: ListBaseComponent<any, any>;

  constructor() { }

  ngAfterViewInit(): void {
    this.component.loadDatasource();
  }

  public get paginador() {
    return this._paginador;
  }

  public get commonPage() {
    return this.commonPage;
  }
}
