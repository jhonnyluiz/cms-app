export class CommonError {
  constructor(
    public message: string,
    public codeMessage: string,
    public typeMessage: string,
    public developError: boolean,
  ) { }
}
