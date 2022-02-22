import { CrudEnum } from './../../../../shared/types/crud.enum';
import { ItemMenu } from './../../../../shared/models/item-menu.model';
import { BaseConstant } from 'src/app/shared/components/base/base.constant';
import { ColumnsTable } from 'src/app/shared/models/columns-table.model';
import { CommonPageConfig } from 'src/app/shared/models/common-page-config.model';

export class ItemMenuConstant extends BaseConstant {

  public get configs(): Map<string, CommonPageConfig> {
    const confs = new Map();
    confs.set(CrudEnum.CREATE.codigo, new CommonPageConfig('Item de Menu', 'Novo item de menu', '/parametrizacoes/menu/sistemas'));
    confs.set(CrudEnum.UPDATE.codigo, new CommonPageConfig('Item de Menu', 'Editar item de menu', '/parametrizacoes/menu/sistemas'));
    return confs;
  }
  public get colunsTableList(): ColumnsTable[] {
    return [];
  }

}
