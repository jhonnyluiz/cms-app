import { MenuItem } from "primeng/api";
import { BaseModel } from "./base.model";

export class Sistema extends BaseModel<Sistema> {

  constructor(
    public id: number = null,
    public nome: string = null,
    public codigo: string = null,
    public descricao: string = null,
    public url: string = null,
    public typeSituacao: string = null,
    public itensMenu: MenuItem[]  = null
  ) { super(id); }

  public of(data: any): Sistema {
    const e = new Sistema();
    e.id = data.id;
    e.nome = data.nome;
    e.codigo = data.codigo;
    e.descricao = data.descricao;
    e.url = data.url;
    e.typeSituacao = data.typeSituacao;
    e.itensMenu = data.itensMenu;
    return e;
  }
}
