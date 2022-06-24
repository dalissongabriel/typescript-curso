import { escapar } from "../decorators/escapar.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { DatasUtils } from "../utils/DatasUtils.js";
import { NumerosUtils } from "../utils/NumerosUtils.js";
import { View } from "./view.js";

export class NegociacaoView extends View<Negociacoes> {
  @escapar
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
      data: DatasUtils.formatar(model.data),
      quantidade: model.quantidade,
      valor: NumerosUtils.formatarMoeda(model.valor),
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
