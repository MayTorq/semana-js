// Função que imprime a tabuada no console
function mostrarTabuada(numero) {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Função que pega o valor do input e chama mostrarTabuada
function mostrarTabuadaDoInput() {
  const numero = parseInt(document.getElementById("numero").value);
  if (!isNaN(numero)) {
    mostrarTabuada(numero);
  } else {
    console.log("Por favor, digite um número válido.");
  }
}
