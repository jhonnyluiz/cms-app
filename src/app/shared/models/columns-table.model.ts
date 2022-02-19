
export class ColumnsTable {
  constructor(
    public label: string = '',
    public styleClass: string = '',
    public field: string = '',
    public sort: string = '',
    public filter: boolean = false
  ) { }

  public static of(label: string, styleClass: string, field: string = label ? label.toLowerCase() : '') {
    return new ColumnsTable(label, styleClass, field);
  }

  public static VAZIO = ColumnsTable.of(' ', 'w-5 text-center');
  public static SITUACAO = ColumnsTable.of('Situação', 'w-10 text-center');
  public static ACOES = ColumnsTable.of('Ações', 'w-10 text-center');

  public get isSorted(): boolean {
    return this.sort !== undefined && this.sort !== null && this.sort.trim() !== '';
  }
}
