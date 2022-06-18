import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  constructor() {}

  public adiciona(negociacao: Negociacao): Negociacoes {
    this.negociacoes.push(negociacao);
    return this;
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
