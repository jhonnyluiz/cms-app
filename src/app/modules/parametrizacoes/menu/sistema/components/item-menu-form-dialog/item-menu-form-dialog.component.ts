import { IconType } from './../../../../../../shared/types/icon.enum';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BaseFormComponent } from 'src/app/shared/components/base/base-form.component';
import { ItemMenuConstant } from '../../item-menu.constant';
import { ItemMenuService } from '../../services/item-menu.service';
import { ItemMenu } from './../../../../../../shared/models/item-menu.model';

@Component({
  selector: 'item-menu-form-dialog',
  templateUrl: './item-menu-form-dialog.component.html',
  styleUrls: ['./item-menu-form-dialog.component.scss']
})
export class ItemMenuFormDialogComponent extends BaseFormComponent<ItemMenu, ItemMenuService> implements OnInit {


  title: string = 'Cadastrar Item de Menu';
  display: boolean = false;


  filteredIcons: any[];
  icons: IconType[] = IconType.values();

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected service: ItemMenuService,
    protected messageService: MessageService,
    protected confirmationService: ConfirmationService,
  ) {
    super(router, activatedRoute, service, messageService, confirmationService, new ItemMenu(), new ItemMenuConstant());
  }

  ngOnInit(): void {
    this.execInitialFunctions();
  }

  initForm(): void {
    this.form = new FormGroup({
      label: new FormControl(''),
      icon: new FormControl(''),
      url: new FormControl(''),
      styleClass: new FormControl(''),
      itemPai: new FormControl(''),
    });
  }

  public setDisplay(value: boolean) {
    this.display = value;
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
}
