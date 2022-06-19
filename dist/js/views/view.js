import { RegexUtils } from "../utils/RegexUtils.js";
export class View {
    constructor(seletor, escapar = false) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`Não foi possível localiar nenhum elemento Html com o seletor: ${seletor}.`);
        }
        this.escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = RegexUtils.SanitizarHTML(template);
        }
        this.elemento.innerHTML = template;
    }
}
