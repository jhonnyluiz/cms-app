import { EventEnum } from './../../../../../../shared/types/event.enum';
import { Sistema } from 'src/app/shared/models/sistema.model';
import { ObjUtil } from './../../../../../../shared/util/obj.util';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BaseFormDialogComponent } from 'src/app/shared/components/base/base-form-dialog.component';
import { ItemMenuConstant } from '../../item-menu.constant';
import { ItemMenuService } from '../../services/item-menu.service';
import { ItemMenu } from './../../../../../../shared/models/item-menu.model';
import { IconType } from './../../../../../../shared/types/icon.enum';

@Component({
  selector: 'item-menu-form-dialog',
  templateUrl: './item-menu-form-dialog.component.html',
  styleUrls: ['./item-menu-form-dialog.component.scss']
})
export class ItemMenuFormDialogComponent extends BaseFormDialogComponent<ItemMenu, ItemMenuService> implements OnInit {

  title: string = 'Cadastrar Item de Menu';
  icons: IconType[] = IconType.values();
  filteredIcons: any[];
  itensPai: any[];
  filteredItensPai: any[];
  sistema: Sistema;
  @Output() onAction: EventEmitter<EventEnum> = new EventEmitter();

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected service: ItemMenuService,
    protected messageService: MessageService,
    protected confirmationService: ConfirmationService,
  ) {
    super(router, activatedRoute, service, messageService, confirmationService, new ItemMenu(), new ItemMenuConstant());
    this.sistema = this.activatedRoute.snapshot.data.entity;
  }

  ngOnInit(): void {
    this.execInitialFunctions();
    this.sub(this.service.getSelectList(this.sistema.id).subscribe(res => this.itensPai = res));
  }

  initForm(): void {
    this.form = new FormGroup({
      label: new FormControl(''),
      icon: new FormControl(''),
      url: new FormControl(''),
      styleClass: new FormControl(''),
      itemPai: new FormControl(''),
      order: new FormControl('0'),
      visible: new FormControl(true),
      disabled: new FormControl(false),
    });
  }
  public limparForm(): void {
    this.form.setValue({label: '', icon: '', url: '', styleClass: '', itemPai: '', order: '0', visible: true, disabled: false}, {onlySelf: false, emitEvent: false});
  }

  protected getDataCreate(): ItemMenu {
    const item = super.getDataCreate();
    item.icon = ObjUtil.isNotEmpty(item.icon) ? item.icon['value'] : ''
    item.sistemaId = this.sistema.id;
    item.itemPaiId = ObjUtil.isNotEmpty(this.form.get('itemPai').value) ? this.form.get('itemPai').value.codigo : null;
    return item;
  }

  protected setDataFormEditExtra(): void {
    console.log(this.entity.itemPaiId)
    this.form.get('icon').setValue(IconType.getByCodigo(this.entity?.icon));
    if (ObjUtil.isNotEmpty(this.entity.itemPaiId)) {
      this.form.get('itemPai').setValue(this.itensPai.find(item => item.codigo === this.entity.itemPaiId));
    }
  }

  filterIcon(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.icons.length; i++) {
      let icon = this.icons[i];
      if (icon.description.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(icon);
      }
    }
    this.filteredIcons = filtered;
  }

  filterItensPai(event) {
    this.sub(this.service.getSelectList(this.sistema.id, event.query).subscribe(res => this.filteredItensPai = res));
  }

  execCallback(event: EventEnum): void {
    this.onAction.emit(event);
  }
}
