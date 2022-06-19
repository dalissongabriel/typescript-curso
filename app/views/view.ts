import { RegexUtils } from "../utils/RegexUtils.js";

export abstract class View<T> {
  protected elemento: HTMLElement;
  public escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    this.elemento = document.querySelector(seletor);
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
