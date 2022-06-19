import { DiasDaSemana } from "../enums/dias-da-semana";
export class DataUtils {
    static ehDiaUtil(data) {
        const hoje = data.getDay();
        return hoje > DiasDaSemana.DOMINGO && hoje < DiasDaSemana.SABADO;
    }
}
