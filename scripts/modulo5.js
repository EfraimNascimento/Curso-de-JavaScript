//Manipulação do DOM (Document Object Model)

//Selecionando no JavaScript
let paragrafo = document.getElementById("meuParagrafo");

//Alterando o texto
paragrafo.innerText = "Texto alterado com JavaScript!";

//Eventos
let botao = document.getElementById("meuBotao");

botao.addEventListener("click", function(){
    alert("O botão foi clicado!");
});

let bntMudar = document.getElementById("btnMudar");

bntMudar.addEventListener('click', function(){
    document.getElementById("titulo").innerText = "JavaScript é incrível!";
})