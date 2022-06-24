export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    ehIgual(objeto) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.lista());
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
        return this;
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
