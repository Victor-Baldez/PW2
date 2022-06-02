function calcularIMC() {
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;

  var imc = peso / altura ** 2;

  alert("O seu IMC é ", imc)
}