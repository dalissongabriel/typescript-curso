import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacaoView extends View<Negociacoes> {
  protected template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
        ${model
          .lista()
          .map((negociacao) => this.renderizarLinha(negociacao))
          .join(" ")}
        </tbody>
      </table
    `;
  }

  private formatar(model: Negociacao): {
    data: string;
    valor: string;
    quantidade: number;
  } {
    return {
      data: new Intl.DateTimeFormat().format(model.data),
      quantidade: model.quantidade,
      valor: Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(model.valor),
    };
  }

  private renderizarLinha(model: Negociacao): string {
    const dados = this.formatar(model);
    return `
      <tr>
        <td>${dados.data}</td>
        <td>${dados.quantidade}</td>
        <td>${dados.valor}</td>
      </tr>  
    `;
  }
}
