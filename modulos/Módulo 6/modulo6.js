//JavaScript Moderno (ES6+)

//Função tradicional
function somar(a, b){
    return a + b;
}

//Arrow Function equivalente
const somarArrow = (a, b) => a + b;

//Desestruturação
//A desestruturação permite extrair dados de arrays ou propriedades de objetos em variáveis distintas de forma muito rápida.
const usuario = {nome: "Ana", idade: 28, cargo: "Desenvolvedora"};

//Extraindo propriedade diretamente para variáveis
const {nome, cargo} = usuario;

console.log(nome);
console.log(cargo);


const exibirPreco = ({preco}) => "O preço é " + preco;
const meuProduto = { nome: "Teclado", preco: 250};
console.log(exibirPreco(meuProduto));