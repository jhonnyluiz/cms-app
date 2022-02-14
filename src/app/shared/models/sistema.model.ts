import { MenuItem } from "primeng/api";

export class Sistema {
  constructor(
    public id: number,
    public nome: string,
    public codigo: string,
    public descricao: string,
    public url: string,
    public typeSituacao: string,
    public itensMenu: MenuItem[]
  ) {}
}
