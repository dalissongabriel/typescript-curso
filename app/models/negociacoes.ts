import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  constructor() {}

  adiciona(negociacao: Negociacao): Negociacoes {
    this.negociacoes.push(negociacao);
    return this;
  }

  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}
