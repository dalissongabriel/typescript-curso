export class NumerosUtils {
  public static intlMoeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  public static formatarMoeda(valor: number): string {
    return this.intlMoeda.format(valor);
  }
}
