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
}
