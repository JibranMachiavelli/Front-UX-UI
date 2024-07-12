const videoGame = ["xbox1", "xbox2", "xbox"];
videoGame.pop();
videoGame.push("3ds");
videoGame.length;

for (let i = 0; i < videoGame.length; i++) {
  console.log(i);
  console.log("itens: ", videoGame[i]);
  if(videoGame[i] === '3ds'){
    console.log('break', videoGame[i]);
    break;
  };
}

const frutas = ['pera','banaan', 'maçã']

videoGame.forEach(function(frutas, index, array){
  frutas.pop();
  console.log('Oi', frutas, index, array);                                   
})

const numero = 0;
const maximo = 20

for(;numero < maximo;){
  console.log(numero);
  numero++;
}
