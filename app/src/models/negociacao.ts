import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {
  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ) {}

  get data(): Date {
    return new Date(this._data.getTime());
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._valor * this._quantidade * 2;
  }

  public static criarNegociacaoCom(
    dataInputValue: string,
    quantidadeInputValue: string,
    valorInputValue: string
  ): Negociacao {
    const exp = /-/g;
    const data = new Date(dataInputValue.replace(exp, ","));
    const quantidade = parseInt(quantidadeInputValue);
    const valor = parseFloat(valorInputValue);
    return new Negociacao(data, quantidade, valor);
  }

  public paraTexto(): string {
    return `
      Data: ${this.data}
      Quantidade: ${this.quantidade}
      Valor: ${this.valor}
    `;
  }

  public ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() === negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear()
    );
  }
}
