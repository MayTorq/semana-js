document.getElementById("btnIniciar").addEventListener("click", function () {
  let soma = 0;
  let contador = 0;

  while (soma < 100) {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    soma += numeroAleatorio;
    contador++;
  }

  document.getElementById("resultadoSoma").textContent = "Soma final: " + soma;
  document.getElementById("resultadoQtd").textContent =
    "Números somados: " + contador;
});
