import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw new Error("Não foi possível localizar o formulário de negociações.");
}

const botaoImportar = document.querySelector("#botao-importar");

if (botaoImportar) {
  botaoImportar.addEventListener("click", (event) => {
    event.preventDefault();
    controller.importa();
  });
} else {
  throw new Error("Não foi possível importar.");
}
