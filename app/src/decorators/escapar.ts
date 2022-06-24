import { RegexUtils } from "../utils/RegexUtils.js";

export function escapar(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    let retorno = metodoOriginal.apply(this, args);
    if (typeof retorno === "string") {
      retorno = RegexUtils.SanitizarHTML(retorno);
    }
    return retorno;
  };

  return descriptor;
}
