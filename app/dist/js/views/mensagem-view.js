import { View } from "./view.js";
export class MensagemView extends View {
    template(model) {
        return `
      <p class="alert alert-${model.tipo}">${model.conteudo}</p>
    `;
    }
}
