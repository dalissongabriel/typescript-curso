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
  @domInjector("#data")
  private inputData: HTMLInputElement;
  @domInjector("#quantidade")
  private inputQuantidade: HTMLInputElement;
  @domInjector("#valor")
  private inputValor: HTMLInputElement;

  private negociacoes: Negociacoes = new Negociacoes();
  private negociacoesView: NegociacaoView = new NegociacaoView(
    "#negociacoesView"
  );
  private mensagemView: MensagemView = new MensagemView("#mensagemView");
  private negociacoesService = new NegociacoesService();

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criarNegociacaoCom(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    if (!DatasUtils.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update(
        new Mensagem(
          TiposDeMensagem.ERRO,
          "Só é permitido criar negociações em dias uteis!"
        )
      );

      return;
    }
    imprimir(negociacao, this.negociacoes);
    this.negociacoes.adiciona(negociacao);
    this.updateTemplate();
    this.limparFormulario();
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private updateTemplate(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update(
      new Mensagem(
        TiposDeMensagem.SUCESSO,
        "A negociação foi criada com sucesso!"
      )
    );
  }

  importa(): void {
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
