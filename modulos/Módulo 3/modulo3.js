//Funções

//Declaração da função
function saudarUsuario(nome){
    console.log("Olá, " + nome + "! Bem-vindo.");
}

//Chamado a função
saudarUsuario("Carlos");
saudarUsuario("Ana");

//Retorno de Funções
function multiplicar(a, b){
    return a * b;
}

let resultado = multiplicar(5, 4);
console.log(resultado);

function verificarMaioridade(idade){
    if (idade >= 18){
        return "Maior de idade";
    }else{
        return "Menor de idade";
    }
}

console.log(verificarMaioridade(21))