
export class ActionButton {
  constructor(
    public label: string = '',
    public icon: string = '',
    public classStyle: string = '',
    public action: Function = () => console.log(`${this.label} execute function`),
    public disabled: boolean = false,
    public tooltip: string = ''
  ) { }

  public static readonly btnNovo = (action: Function): ActionButton => new ActionButton('Novo', '', '', action, false, 'Cadastrar novo item');
  public static readonly btnExcluir = (action: Function): ActionButton => new ActionButton('Excluir', '', 'p-button-danger', action, true, 'Excluir itens selecionados');
  public static readonly btnSalvar = (action: Function): ActionButton => new ActionButton('Salvar', '', 'p-button-success', action, false, 'Salvar todos os dados');
  public static readonly btnCancelar = (action: Function): ActionButton => new ActionButton('Cancelar', '', 'p-button-secondary', action, false, 'Descartar dados alterados');

}
