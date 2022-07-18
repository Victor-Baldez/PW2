function contar() {
  let saida = document.getElementById("saida")

  saida.innerHTML += "<p>Números pares de 1 até 10</p>"
  let cont = 100
  while (cont <= 120) {
      saida.innerHTML +=  cont+" &#x1F449; "
      cont += 2
  }
  saida.innerHTML += " &#x1F3C1;"
}