export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._valor * this._quantidade * 2;
    }
    static criarNegociacaoCom(dataInputValue, quantidadeInputValue, valorInputValue) {
        const exp = /-/g;
        const data = new Date(dataInputValue.replace(exp, ","));
        const quantidade = parseInt(quantidadeInputValue);
        const valor = parseFloat(valorInputValue);
        return new Negociacao(data, quantidade, valor);
    }
    paraTexto() {
        return `
      Data: ${this.data}
      Quantidade: ${this.quantidade}
      Valor: ${this.valor}
    `;
    }
    ehIgual(negociacao) {
        return (this.data.getDate() === negociacao.data.getDate() &&
            this.data.getMonth() === negociacao.data.getMonth() &&
            this.data.getFullYear() === negociacao.data.getFullYear());
    }
}
