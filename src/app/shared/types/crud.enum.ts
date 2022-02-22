export class CrudEnum {
  constructor(
    public codigo: string,
    public descricao: string
  ) {}

  public static CREATE = new CrudEnum('CREATE', 'Criação');
  public static READ = new CrudEnum('READ', 'Leitura');
  public static UPDATE = new CrudEnum('UPDATE', 'Atualização');
  public static DELETE = new CrudEnum('DELETE', 'Exclusão');
  public static DETAIL = new CrudEnum('DETAIL', 'Detalhes');
  public static MANAGER = new CrudEnum('MANAGER', 'Gerenciamento');

  public static values = [this.CREATE, this.READ, this.UPDATE, this.DELETE, this.DETAIL];

  public equals(item: CrudEnum): boolean {
    return this.codigo === item?.codigo;
  }
}
