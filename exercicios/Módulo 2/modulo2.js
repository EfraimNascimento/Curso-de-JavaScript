//Par ou Ímpar

let numero = 4;

if(numero % 2 == 0){
    console.log(`O numero ${numero} é par`);
}else{
    console.log(`O numero ${numero} é ímpar`);
}

//Classificador de Notas

let pontuacao = 100;

if(pontuacao >= 90){
    console.log("A pontuação foi: A");
}else if(pontuacao >= 80 && pontuacao <= 89){
    console.log("A pontuação foi: B");
}else if(pontuacao >= 70 && pontuacao <=79){
    console.log("A pontuação foi: C");
}else{
    console.log("Reprovado");
};

//Tabuada com For

for(let i = 1; i <= 10; i++){
    console.log(`7 X ${i} = ${7 * i}`);
}