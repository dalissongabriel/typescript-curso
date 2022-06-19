import { DiasDaSemana } from "../enums/dias-da-semana.js";

export class DataUtils {
  public static intl = new Intl.DateTimeFormat();

  public static ehDiaUtil(data: Date): boolean {
    const hoje = data.getDay();

    return hoje > DiasDaSemana.DOMINGO && hoje < DiasDaSemana.SABADO;
  }

  public static formatar(data: Date): string {
    return this.intl.format(data);
  }
}
