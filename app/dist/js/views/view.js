var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
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
__decorate([
    logarTempoExecucao()
], View.prototype, "update", null);
