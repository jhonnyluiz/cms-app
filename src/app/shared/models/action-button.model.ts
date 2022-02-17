
export class ActionButton {
  constructor(
    public label: string = '',
    public icon: string = '',
    public classStyle: string = '',
    public action: Function = () => console.log(`${this.label} execute function`),
    public disabled: boolean = false,
  ) { }

  public static readonly btnNovo = (action: Function): ActionButton => new ActionButton('Novo', '', '', action, false);
  public static readonly btnExcluir = (action: Function): ActionButton => new ActionButton('Excluir', '', 'p-button-danger', action, true);
  public static readonly btnSalvar = (action: Function): ActionButton => new ActionButton('Salvar', '', 'p-button-success', action, true);
  public static readonly btnCancelar = (action: Function): ActionButton => new ActionButton('Cancelar', '', 'p-button-secondary', action, false);

  // public static actionsFormComponent: ActionButton[] = (funcSalvar: Function, funcCancelar: Function) => [ActionButton.btnSalvar(funcSalvar), ActionButton.btnCancelar(funcCancelar)];
}
