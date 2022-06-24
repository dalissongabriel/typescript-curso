var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { escapar } from "../decorators/escapar.js";
import { DatasUtils } from "../utils/DatasUtils.js";
import { NumerosUtils } from "../utils/NumerosUtils.js";
import { View } from "./view.js";
export class NegociacaoView extends View {
    template(model) {
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
    formatar(model) {
        return {
            data: DatasUtils.formatar(model.data),
            quantidade: model.quantidade,
            valor: NumerosUtils.formatarMoeda(model.valor),
        };
    }
    renderizarLinha(model) {
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
__decorate([
    escapar
], NegociacaoView.prototype, "template", null);
