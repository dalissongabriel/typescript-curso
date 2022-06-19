import { RegexUtils } from "../utils/RegexUtils.js";

export abstract class View<T> {
  protected elemento: HTMLElement;
  public escapar: boolean;

  constructor(seletor: string, escapar = false) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw new Error(
        `Não foi possível localiar nenhum elemento Html com o seletor: ${seletor}.`
      );
    }

    this.escapar = escapar;
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);

    if (this.escapar) {
      template = RegexUtils.SanitizarHTML(template);
    }

    this.elemento.innerHTML = template;
  }
}
