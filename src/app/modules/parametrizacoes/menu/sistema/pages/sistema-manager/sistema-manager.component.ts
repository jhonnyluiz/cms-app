import { ItemMenu } from './../../../../../../shared/models/item-menu.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService, TreeNode } from 'primeng/api';
import { BaseFormComponent } from 'src/app/shared/components/base/base-form.component';
import { Sistema } from 'src/app/shared/models/sistema.model';
import { SistemaService } from './../../../../../../shared/services/sistemas.service';
import { EventEnum } from './../../../../../../shared/types/event.enum';
import { ObjUtil } from './../../../../../../shared/util/obj.util';
import { ItemMenuFormDialogComponent } from './../../components/item-menu-form-dialog/item-menu-form-dialog.component';
import { SistemaConstant } from './../../sistema.constant';
import { CrudEnum } from 'src/app/shared/types/crud.enum';

@Component({
  selector: 'app-sistema-manager',
  templateUrl: './sistema-manager.component.html',
  styleUrls: ['./sistema-manager.component.scss']
})
export class SistemaManagerComponent extends BaseFormComponent<Sistema, SistemaService> implements OnInit {

  itensMenu: MenuItem[] = [];
  itensMenuTree: TreeNode[] = [];
  itemMenuSelected: TreeNode;

  @ViewChild("itemMenuDialog") itemMenuDialog: ItemMenuFormDialogComponent;
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

  initForm(): void {
    this.form = new FormGroup({
      itensMenu: new FormControl(''),
    });
  }

  novoItem() {
    this.itemMenuDialog.openDialog();
  }

  selectItemMenu($event) {
    console.log($event)
    this.itemMenuDialog.openDialog(this.itemMenuSelected.data, CrudEnum.UPDATE);
  }

  callbackDialog(event: EventEnum) {
    if (EventEnum.SUCCESS_DIALOG.equals(event)) {
      this.loading();
      this.sub(this.service.getById(this.entity.id).subscribe(e => {
        this.setEntity(e);
        this.setDataFormEditExtra();
        this.loaded();
      }));
    }
  }

  public getDataUpdate(): Sistema {
    const e = this.entity;
    e.itensMenu = this.itensMenuTree.map((n, idx) => this.convertNodeTreeToMenuItem(n, idx));
    return e;
  }

  protected mapperDataCreate(entity: Sistema): Sistema {
    const e = new Sistema().of({ ...entity });
    e.itensMenu = this.itensMenuTree.map((n, idx) => this.convertNodeTreeToMenuItem(n, idx))
    return e;
  }

  protected setDataFormEditExtra(): void {
    if (ObjUtil.isNotEmpty(this.entity.itensMenu)) {
      this.itensMenuTree = this.entity.itensMenu.map(this.convertMenuItemToNodeTree);
    }
  }

  private convertMenuItemToNodeTree = (item: MenuItem): TreeNode => {
    return { label: item.label, icon: item.icon, children: item.items?.map((c) => this.convertMenuItemToNodeTree(c)), data: item }
  }

  private convertNodeTreeToMenuItem = (item: TreeNode, index: number): MenuItem => {
    const i = item.data;
    i.order = index;
    i.items = item.children?.map((c, idx) => this.convertNodeTreeToMenuItem(c, idx));
    return i;
  }
}
