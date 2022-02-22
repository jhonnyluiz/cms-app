import { ColumnsTable } from './../../models/columns-table.model';
import { CommonPageConfig } from "../../models/common-page-config.model";

export abstract class BaseConstant {

  constructor() {}

  public getPageConfig(key: string): CommonPageConfig {
    return this.configs.get(key);
  }

  public abstract get configs(): Map<string, CommonPageConfig>;
  public abstract get colunsTableList(): ColumnsTable[];
}
