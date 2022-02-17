import { trimTrailingNulls } from "@angular/compiler/src/render3/view/util";

export class ColumnsTable {
  constructor(
    public label: string = '',
    public field: string =  label ? label.toLowerCase() : '',
    public sort: string = '',
    public filter: boolean = false
  ) {}

  public get isSorted(): boolean {
    return this.sort !== undefined && this.sort !== null && this.sort.trim() !== '';
  }
}
