import { MenuItem } from "primeng/api";
import { BaseModel } from "./base.model";

export class Sistema extends BaseModel {
  constructor(
    public id: number,
    public nome: string,
    public codigo: string,
    public descricao: string,
    public url: string,
    public typeSituacao: string,
    public itensMenu: MenuItem[]
  ) { super(id); }
}
