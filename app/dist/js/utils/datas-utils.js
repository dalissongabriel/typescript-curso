import { DiasDaSemana } from "../enums/dias-da-semana.js";
export class DatasUtils {
    static ehDiaUtil(data) {
        const hojeDiaDaSemana = data.getDay();
        return (hojeDiaDaSemana > DiasDaSemana.DOMINGO &&
            hojeDiaDaSemana < DiasDaSemana.SABADO);
    }
    static formatar(data) {
        return this.intl.format(data);
    }
}
DatasUtils.intl = new Intl.DateTimeFormat();
