export class NumerosUtils {
    static formatarMoeda(valor) {
        return this.intlMoeda.format(valor);
    }
}
NumerosUtils.intlMoeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});
