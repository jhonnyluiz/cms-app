import { CrudEnum } from './../../../../shared/types/crud.enum';
import { CommonPageConfig } from './../../../../shared/models/common-page-config.model';
import { ColumnsTable } from './../../../../shared/models/columns-table.model';
import { BaseConstant } from 'src/app/shared/components/base/base.constant';
export class SistemaConstant extends BaseConstant {

  constructor() { super()}

  public get configs(): Map<string, CommonPageConfig> {
    const confs = new Map();
    confs.set(CrudEnum.CREATE.codigo, new CommonPageConfig('Sistemas', 'Novo sistema', '/parametrizacoes/menu/sistemas'));
    confs.set(CrudEnum.UPDATE.codigo, new CommonPageConfig('Sistemas', 'Editar sistema', '/parametrizacoes/menu/sistemas'));
    confs.set(CrudEnum.MANAGER.codigo, new CommonPageConfig('Sistemas', 'Gerenciar sistema', '/parametrizacoes/menu/sistemas'));
    confs.set(CrudEnum.READ.codigo, new CommonPageConfig('Sistemas', 'Listagem de sistemas', '/parametrizacoes/menu/sistemas'));
    return confs;
  }

  public get colunsTableList(): ColumnsTable[] {
    return [
      ColumnsTable.VAZIO,
      ColumnsTable.of('Código','w-10'),
      ColumnsTable.of('Nome', 'w-65'),
      ColumnsTable.SITUACAO,
      ColumnsTable.of('Gerenciar', 'w-5 text-center'),
      ColumnsTable.EDITAR,
    ];
  }

}
