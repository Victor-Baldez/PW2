function avancarDias() {
  let dia = Number(window.prompt("Informe o dia da semana: "))
  let quantidade = Number(window.prompt("Informe a quantidade de dias que dejeja avançar: "))
  let diasSemana = ["Segunda-feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"];

  let indiceDia = diasSemana.indexOf(dia);

  let indiceAtualizado = indiceDia + quantidade;
  while (indiceAtualizado >= diasSemana.length) {
    indiceAtualizado -= diasSemana.length;
  }

  alert (diasSemana[indiceAtualizado]);
}