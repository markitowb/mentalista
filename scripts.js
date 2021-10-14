var numeroSecreto = parseInt(Math.random() * 11);
var input = document.querySelector("#valor");
var button = document.querySelector("#tentativa");
console.log(numeroSecreto);
var i = 0;

function Chutar() {
  if (i < 3) {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);

    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Parabéns!! Você Acertou!!";
      document.getElementById("valor").value = "";
      input.disabled = true;
      button.disabled = true;
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML =
        "Você deve digitar um número entre 01 e 10!!!";
      document.getElementById("valor").value = "";
      i++;
      console.log(i);
    } else {
      elementoResultado.innerHTML = "Errou!!!";
      document.getElementById("valor").value = "";
      i++;
      console.log(i);
    }
  } else {
    var elementoResultado = document.getElementById("resultado");
    document.getElementById("valor").value = "";
    elementoResultado.innerHTML = "Acabaram suas tentativas!!!";
    input.disabled = true;
    button.disabled = true;
  }
}
