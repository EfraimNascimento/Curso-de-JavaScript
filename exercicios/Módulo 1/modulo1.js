//Cadastro Simples.

const nome = "Efraim Nascimento";
let idade = 24;
let estudandoProgramação = true;

console.log(`Meu nome é ${nome}, tenho ${idade} anos. Estudante ${estudandoProgramação}.`);

//Operadores Matemáticos.

let num1 = 15;
let num2 = 4;

function operadores(a, b){
    console.log(`
        A soma é: ${a + b}
        A subtração é: ${a - b}
        A multiplicação é: ${a * b}
        A divisão é: ${a / b}
        O resto da divisão é: ${a % b}
    `);
};

operadores(num1, num2);