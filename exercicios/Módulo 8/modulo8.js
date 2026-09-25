//Async/Await e Consumo de APIs (Fetch)

const esperarSorteio = () => new Promise((resolve) =>{
    setTimeout(resolve, 5000);
});

async function jogarLoteria(){

    console.log("Aguardando o sorteio");

    try{
        await esperarSorteio();
        let num = Math.random() * 10
        if(num > 5){
            console.log("Você ganhou!");
        }else if(num <= 5){
            throw new Error("Você perdeu!");
        }
    }catch (error){
        return `Resultado: ${error.message}`;
    }
}    

jogarLoteria();

//Buscando Dados na Web (Fetch)
//Tratamento de Erros em APIs

async function buscarCep(cep) {

    try{
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();
        
    }catch(error){
        console.log("CEP não encontrado");
    }

}

buscarCep(22241330);


