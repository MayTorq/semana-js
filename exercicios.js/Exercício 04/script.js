const mostrarParesDeAte = (n) => {
  for (let i = 0; i <= n; i += 2) {
    console.log(i);
  }
};

document.getElementById("btnMostrar").addEventListener("click", () => {
  const numero = parseInt(document.getElementById("numero").value);
  mostrarParesDeAte(numero);
});
