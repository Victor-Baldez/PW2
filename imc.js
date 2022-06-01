
function calcularIMC() {
  var imc = imc.getElementById("peso").value / (imc.getElementById("altura").value * imc.getElementById("altura").value)
  
  alert(imc)
}