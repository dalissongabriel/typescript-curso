import { TiposDeMensagem } from "../enums/tipos-de-mensagens";

export class Mensagem {
  constructor(
    private readonly _tipo: TiposDeMensagem,
    private readonly _conteudo: string
  ) {}

  get tipo(): TiposDeMensagem {
    return this._tipo;
  }

  get conteudo(): string {
    return this._conteudo;
  }
}
