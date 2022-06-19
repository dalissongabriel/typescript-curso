import { DiasDaSemana } from "../enums/dias-da-semana.js";

export class DataUtils {
  public static ehDiaUtil(data: Date): boolean {
    const hoje = data.getDay();

    return hoje > DiasDaSemana.DOMINGO && hoje < DiasDaSemana.SABADO;
  }
}
