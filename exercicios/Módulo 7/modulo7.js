//O Despertador

function iniciarDespertador(segundos){
    console.log("Contando...");
    setTimeout(() => {
        console.log("BEEP BEEP BEEP!.");    
    }, segundos * 1000);
}

iniciarDespertador(5);

//Criando uma Promise

function jogarLoteria(){
    const sorteio = new Promise((resolve, reject) =>{
        try{
            let num = Math.random() * 10
            if(num > 5){
                resolve("Você ganhou!");
            }else if(num <= 5){
                reject("Você perdeu!");
            }
        }catch{
            console.log("Erro")
        }
    });
    
    sorteio
        .then(resultado => console.log(resultado))
        .catch(erro => console.log(erro))
}    

jogarLoteria();
