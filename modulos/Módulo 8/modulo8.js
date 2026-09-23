//Async/Await e Consumo de APIs (Fetch)

//Async / Await
async function executarTarefa(){
    try{
        //Pausa a execução da função até a promise resolver
        const mensagem = await simularAtraso;
        console.log(mensagem);
    } catch(erro){
        console.log(erro);
    }
}

//Consumindo APIs com Fetch
async function buscarUsuario(){
    //Busca dados em formato JSON de uma API pública
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const usuario = await resposta.json(); //Converte a resposta para objeto JavaScript

    console.log(usuario.name);
}
buscarUsuario();

async function buscarPokemon() {
    try{
        let resposta = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        let pokemon = await resposta.json();
        console.log(pokemon.name);
    }catch(erro){
        console.log("Erro na requisição: ", erro);
    }

}
buscarPokemon();