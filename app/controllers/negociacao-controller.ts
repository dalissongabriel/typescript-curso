import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { TiposDeMensagem } from "../enums/tipos-de-mensagens.js";
import { Mensagem } from "../models/mensagem.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes;
  private negociacoesView: NegociacaoView = new NegociacaoView(
    "#negociacoesView"
  );
  private mensagemView: MensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoes = new Negociacoes();
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = this.criaNegociacao();

    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update(
        new Mensagem(
          TiposDeMensagem.ERRO,
          "Só é permitido criar negociações em dias uteis!"
        )
      );

      return;
    }

    this.negociacoes.adiciona(negociacao);
    this.updateTemplate();
    this.limparFormulario();
  }

  private criaNegociacao(): Negociacao {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private ehDiaUtil(data: Date): boolean {
    const hoje = data.getDay();

    return hoje > DiasDaSemana.DOMINGO && hoje < DiasDaSemana.SABADO;
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
}
