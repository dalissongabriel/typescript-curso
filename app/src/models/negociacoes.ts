import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
  private negociacoes: Negociacao[] = [];

  public ehIgual(objeto: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.lista());
  }

  public adiciona(negociacao: Negociacao): Negociacoes {
    this.negociacoes.push(negociacao);
    return this;
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }
}
