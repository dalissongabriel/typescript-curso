import { RegexUtils } from "../utils/regex-utils.js";
export function escapar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === "string") {
            retorno = RegexUtils.SanitizarHTML(retorno);
        }
        return retorno;
    };
    return descriptor;
}
