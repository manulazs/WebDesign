let display = document.getElementById("display");
let operacaoAtual = "";

function adicionarValor(valor) {
  if (display.innerText === "0" || operacaoAtual.includes("=")) {
    operacaoAtual = valor;
  } else {
    operacaoAtual += valor;
  }
  display.innerText = operacaoAtual;
}

function calcular() {
  try {
    operacaoAtual = eval(operacaoAtual).toString();
  } catch {
    operacaoAtual = "Erro";
  }
  display.innerText = operacaoAtual;
}

function limparDisplay() {
  operacaoAtual = "";
  display.innerText = "0";
}
