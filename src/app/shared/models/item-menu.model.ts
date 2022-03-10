import { ObjUtil } from './../util/obj.util';
import { Sistema } from 'src/app/shared/models/sistema.model';
import { MenuItem } from 'primeng/api';
import { BaseModel } from './base.model';
export class ItemMenu extends BaseModel<ItemMenu> {

  constructor(
    public id: number = null,
    public label: string = null,
    public icon: string = null,
    public url: string = null,
    public disabled: boolean = null,
    public visible: boolean = null,
    public badge: string = null,
    public tooltip: string = null,
    public tooltipPosition: string = null,
    public styleClass: string = null,
    public sistema: Sistema = null,
    public items: ItemMenu[] = null,
    public order: number = null,
    public itemPai: number = null,
    public sistemaId: number = null,
    public itemPaiId: number = null,
  ) {
    super(id);
  }

  public of(data: any): ItemMenu {
    const e = new ItemMenu();
    e.label = data.label;
    e.icon = data.icon;
    e.url = data.url;
    e.disabled = data.disabled;
    e.visible = data.visible;
    e.badge = data.badge;
    e.tooltip = data.tooltip;
    e.tooltipPosition = data.tooltipPosition;
    e.styleClass = data.styleClass;
    e.sistema = data.sistema;
    e.items = data.items;
    e.order = data.order;
    e.itemPai = data.itemPai;
    return e;
  }

}
