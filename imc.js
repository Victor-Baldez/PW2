
function calcularIMC() {
  var peso = imc.getElementById("peso").value;
  var altura = imc.getElementById("altura").value;

var imc = peso / altura ** 2;

  alert(imc)
}