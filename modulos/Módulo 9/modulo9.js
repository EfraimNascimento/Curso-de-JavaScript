//Programação Orientada a Objetos (POO)

//Classes e Objetos
class Pessoa{
    //O construtor é executado sempre que criamos uma NOVA Pessoa
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    //Comportamentos (Métodos) da classe
    seApresentar(){
        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
    }
}

//Instanciando (Criando) novos objetos a partir do molde
const pessoa1 = new Pessoa("Pedro", 22);
const pessoa2 = new Pessoa("Mariana", 29);

pessoa1.seApresentar();
pessoa2.seApresentar();

class contaBancaria{
    constructor(titular, saldo){
        saldo = 0;
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor){
        if(valor != 0){
            this.saldo += valor;
        }else{
            console.log("Insira uma quantia válida para depósito")
        }
    }

    sacar(valor){
        if(this.saldo >= valor){
            console.log(`Valor de R$${valor} sacado com sucesso!`);
        }else{
            console.log("Saldo insuficiente");
        }
    }
}

const minhaConta = new contaBancaria("Efraim");

minhaConta.depositar(100);
minhaConta.sacar(150);
minhaConta.sacar(50);