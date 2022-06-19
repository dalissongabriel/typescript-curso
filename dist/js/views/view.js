import { RegexUtils } from "../utils/RegexUtils.js";
export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
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
