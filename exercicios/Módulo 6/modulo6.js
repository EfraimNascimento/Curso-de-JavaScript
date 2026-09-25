//Refatorando para Arrow Functions

dobro = (numero) => numero * 2;

//Desestruturação de Arrays e Objetos

const config = {tema: "dark", idioma: "pt-BR", versoes: [1, 2, 3]};

const {tema, idioma, versoes: [v1, ,v3]} = config;

//O Operador Spread(...)

let turmaA = ["Ana", "Carlos"]
let turmaB = ["João", "Maria"]

let todasTurmas = ["Professor", ...turmaA, ...turmaB];