import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  constructor() {}

  adiciona(negociacao: Negociacao): Negociacoes {
    this.negociacoes.push(negociacao);
    return this;
  }

  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
