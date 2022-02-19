import { CommonPageConfig } from './../../../../shared/models/common-page-config.model';
import { ColumnsTable } from './../../../../shared/models/columns-table.model';
export class SistemaConstant {
  private constructor() {}

  public static LIST_PAGE_CONFIG = new CommonPageConfig('Sistemas', 'Listagem de sistemas', '/parametrizacoes/menu/sistemas')
  public static COLS_TABLE_LIST: ColumnsTable[] = [
    ColumnsTable.VAZIO,
    ColumnsTable.of('Código','w-10'),
    ColumnsTable.of('Nome', 'w-65'),
    ColumnsTable.SITUACAO,
    ColumnsTable.ACOES
  ];
}
