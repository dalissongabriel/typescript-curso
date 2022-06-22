import { DiasDaSemana } from "../enums/dias-da-semana.js";

export class DatasUtils {
  public static intl = new Intl.DateTimeFormat();

  public static ehDiaUtil(data: Date): boolean {
    const hojeDiaDaSemana = data.getDay();

    return (
      hojeDiaDaSemana > DiasDaSemana.DOMINGO &&
      hojeDiaDaSemana < DiasDaSemana.SABADO
    );
  }

  public static formatar(data: Date): string {
    return this.intl.format(data);
  }
}
