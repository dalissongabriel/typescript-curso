export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
        return this;
    }
    lista() {
        return this.negociacoes;
    }
}
