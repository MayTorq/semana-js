const btnIniciar = document.getElementById("btnIniciar");
const resultadoDiv = document.getElementById("resultado");

btnIniciar.addEventListener("click", () => {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let tentativa = 0;
  let acertou = false;
  let texto = `Número secreto: ${numeroSecreto}<br>`;
  const tentativasFeitas = [];

  do {
    tentativa++;
    let palpite;

    do {
      palpite = Math.floor(Math.random() * 10) + 1;
    } while (tentativasFeitas.includes(palpite));

    tentativasFeitas.push(palpite);
    texto += `Tentativa ${tentativa}: ${palpite} <br>`;

    if (palpite === numeroSecreto) {
      acertou = true;
      texto += `Acertou em ${tentativa}</span> tentativas!`;
    }
  } while (!acertou);

  resultadoDiv.innerHTML = texto;
});
