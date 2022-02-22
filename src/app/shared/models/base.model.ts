export abstract class BaseModel<T extends BaseModel<T>>  {
  constructor(
    public id: number
  ) {}

  public abstract of(data: any): T;
}
