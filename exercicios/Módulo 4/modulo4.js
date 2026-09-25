//Manipulação de Lista

let filmes = ["Devoradores de estrelas", "Obsessão", "Flow"];

filmes.push("Evil dead");
filmes[0] = "Viagem ao centro da terra";
console.log(filmes.length);
for(let i = 0; i < filmes.length; i++){
    console.log(filmes[i]);
};

//Objeto Livro

class Livro{
    constructor(titulo, autor, paginas, jaLido){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.jaLido = jaLido;
    }

    descLivro(){
        console.log(`O livro ${this.titulo} escrito por ${this.autor} tem ${this.paginas} páginas.`);

        if(this.jaLido == true){
            console.log("Eu já li este livro.");
        }else{
            console.log("Ainda não li.")
        }
    }


}

const mLivro = new Livro;
mLivro.titulo = "Viagem ao Centro da Terra";
mLivro.autor = "Júlio Verne";
mLivro.paginas = 330;
mLivro.jaLido = true;

mLivro.descLivro();

//Array de Objetos

let alunos = [
    {
        nome: "Thiago",
        nota: 6.7
    },{
        nome: "Rafaela",
        nota: 8.5
    },{
        nome: "Renata",
        nota: 9
    }
];


for(let i = 0; i < alunos.length; i++){
    if(alunos[i].nota >= 7){
        console.log(`${alunos[i].nome} teve a nota de: ${alunos[i].nota}`);
    }
};