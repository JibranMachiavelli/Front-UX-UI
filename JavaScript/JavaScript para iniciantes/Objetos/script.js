const pessoa = {
  nome: "andre",
  idade: 23,
};

console.log(pessoa);

const quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    console.log("this: ", this.lados);
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
};

console.log("Area: ", quadrado.area(5));
console.log("Perimetro: ", quadrado.perimetro(5));

console.table(quadrado);

//---------------------------------------------------------

const menu = {
  width: 800,
  height: 50,
  background: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
};

console.table(menu);

meunu.background = "#000";
menu.color = "blue";

menu.esconder = function () {
  console.log("escondi");
};

const br = menu.background;

//-------------------------------------------

//Atividade

const dadosPessoais = {
  nome: "Leonardo",
  sobrenome: "Machiavelli",
  idade: "19",
  altura: "1.75",
  sexo: "Masculino",
  nomeCompleto() {
    return dadosPessoais.nome + dadosPessoais.sobrenome;
  },
};

dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

console.table("Dados Pessoais: ", dadosPessoais);

const carro = {
  preco: 1000,
  portas: 4,
  marca: "audi",
};

console.log("Preço atual", carro.preco, "Preço do carro x3", carro.preco * 3);

carro.preco = 3000;

const cachorro = {
  raça: labrador,
  cor: preto,
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "latir";
    } else {
      return "nada";
    }
  },
};

//--------------------------

const nome = "André";
fixed;
length;
slice;
