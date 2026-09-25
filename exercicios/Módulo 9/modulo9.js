//Classe Produto

class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularTotal(){
        console.log(this.preco * this.quantidade)
    }
}

let produto1 = new Produto(
    this.nome = "Notebook",
    this.preco = 5000,
    this.quantidade = 500
);


let produto2 = new Produto(
    this.nome = "SmartPhone",
    this.preco = 2500,
    this.quantidade = 500
);

produto1.calcularTotal();
produto2.calcularTotal();

//Herança

class Animal{
    constructor(nome){
        this.nome = nome
    };

    emitirSom(){
        console.log("Barulho genérico");
    }
}

class Cachorro extends Animal{
    emitirSom(){
        console.log("Au au!");
    }
}

const cachorrinho = new Cachorro

cachorrinho.emitirSom();

//Carrinho de Compras Avançado

class Carrinho{
    constructor(itens = []){
        this.itens = itens
    }

    adicionarItem(produto){
        this.itens.push(produto)
    }

    removerItem(nomeProduto){
        const itemEncontrado = this.itens.find(item => item.nome === nomeProduto);
        let itensAtualizados = this.itens.filter(
            item => item !== itemEncontrado
        );
        this.itens = itensAtualizados;
    }

    calcularTotal(){
        let precoTotal = 0;
        this.itens.forEach(iten =>{
            precoTotal += iten.preco
        })

        console.log(`O preço total dos itens do seu carrinho é de: R$${precoTotal}!.`);
        
    }
}

let carrinho1 = new Carrinho()

carrinho1.adicionarItem(
    {
        nome: "Refrigerante",
        preco: 7.49
    }
);

carrinho1.adicionarItem(
    {
        nome: "Farofa",
        preco: 5.98
    }
);

carrinho1.adicionarItem(
    {
        nome: "Açucar",
        preco: 10.98
    }
);

carrinho1.removerItem("Farofa");
carrinho1.calcularTotal();
