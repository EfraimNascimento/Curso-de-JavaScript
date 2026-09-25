//Função de Saudação

function saudar(nome, horaDoDia){
    if(horaDoDia < 12){
        console.log(`Bom dia, ${nome}`);
    }else if(horaDoDia >= 12 && horaDoDia <= 17){
        console.log(`Boa tarde, ${nome}`);
    }else if(horaDoDia >= 18){
        console.log(`Boa noite, ${nome}`);
    };
};

saudar("Efraim", 10);
saudar("Efraim", 16);
saudar("Efraim", 21);

//Conversor de Temperatura

function celsiusParaFahrenheit (tempGrau){
    console.log(`A temperatura em Fahrenheit é: ${tempGrau * 1.8 + 32}`);
}

celsiusParaFahrenheit(20);