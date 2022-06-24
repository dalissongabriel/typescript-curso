import { Imprimivel } from "../interfaces/imprimivel";

export function imprimir(...objetos: Imprimivel[]) {
  for (let objeto of objetos) {
    console.log(objeto.paraTexto());
  }
}
