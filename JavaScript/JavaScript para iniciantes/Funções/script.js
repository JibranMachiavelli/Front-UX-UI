function pi() {
  return 3.14;
}

var total = 5 * pi(); //15.7

console.log(pi());

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.75));

function corfavorita(cor) {
  if (cor === "azul") {
    return "eu  gosto do céu";
  } else if (cor === "verde") {
    return "eu gosto de mato";
  } else {
    return "eu não gosto de ccores";
  }
}

console.log(corfavorita("azul"));

function mostraConsole() {
  console.log("oi");
}

addEventListener("click", mostraConsole);

//------------------------------------------

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade > 60) {
    return true;
  } else {
    return false;
  }
}
