//Assincronismo e Promises

//Promises
const promessa = new Promise ((resolve, reject) =>{
    let sucesso = true; //Simulando um cenário

    if(sucesso){
        resolve("Operação concluída com sucesso!");
    }else{
        reject("Ocorreu um erro no porcesso.");
    }
});

//Consumindo a promise
promessa
    .then(resultado => console.log(resultado)) //Captura o resolve
    .catch(erro => console.log(erro)); //Captura o reject

const simularAtraso = new Promise((resolve) =>{
    setTimeout(() => {
        resolve("Dados carregados!");
    }, 2000);
});

simularAtraso.then((mensagem) =>{
    console.log(mensagem);
});