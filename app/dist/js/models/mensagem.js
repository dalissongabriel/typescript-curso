export class Mensagem {
    constructor(_tipo, _conteudo) {
        this._tipo = _tipo;
        this._conteudo = _conteudo;
    }
    get tipo() {
        return this._tipo;
    }
    get conteudo() {
        return this._conteudo;
    }
}
