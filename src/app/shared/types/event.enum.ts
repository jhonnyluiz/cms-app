export class EventEnum {
  constructor(
    public codigo: string,
    public data: any = null
  ) {}

  public static SUCCESS_DIALOG = new EventEnum('SUCCESS_DIALOG');
  public static CANCEL_DIALOG = new EventEnum('CANCEL_DIALOG');
  public static values = [this.SUCCESS_DIALOG, this.CANCEL_DIALOG];

  public equals(item: EventEnum): boolean {
    return this.codigo === item?.codigo;
  }
}
