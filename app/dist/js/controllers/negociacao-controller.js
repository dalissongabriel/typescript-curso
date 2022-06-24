var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { TiposDeMensagem } from "../enums/tipos-de-mensagens.js";
import { Mensagem } from "../models/mensagem.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { DatasUtils } from "../utils/datas-utils.js";
import { imprimir } from "../utils/imprimir-utils.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacaoView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.negociacoesService = new NegociacoesService();
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criarNegociacaoCom(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!DatasUtils.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update(new Mensagem(TiposDeMensagem.ERRO, "Só é permitido criar negociações em dias uteis!"));
            return;
        }
        imprimir(negociacao, this.negociacoes);
        this.negociacoes.adiciona(negociacao);
        this.updateTemplate();
        this.limparFormulario();
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    updateTemplate() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update(new Mensagem(TiposDeMensagem.SUCESSO, "A negociação foi criada com sucesso!"));
    }
    importa() {
        this.negociacoesService
            .obterNegociacoesDoDia()
            .then((negociacoesdeHoje) => {
            return negociacoesdeHoje.filter((negociacaoDeHoje) => {
                return !this.negociacoes
                    .lista()
                    .some((negociacao) => negociacao.ehIgual(negociacaoDeHoje));
            });
        })
            .then((negociacoesdeHojeNaoDuplicadas) => {
            for (let negociacao of negociacoesdeHojeNaoDuplicadas) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }
}
__decorate([
    domInjector("#data")
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector("#quantidade")
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector("#valor")
], NegociacaoController.prototype, "inputValor", void 0);
