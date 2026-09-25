//Alterando Estilos

let quadrado = document.getElementById('quadrado');

quadrado.addEventListener('mouseenter', ()=>{
    quadrado.style.backgroundColor = 'red';
});

quadrado.addEventListener('mouseleave', ()=>{
    quadrado.style.backgroundColor = 'blue';
});

//Contador Interativo

let btn = document.getElementsByClassName('button')
let contador = 0;

btn[0].addEventListener('click', () =>{
    contador--;
    document.getElementById('numContador').innerText = `${contador}`;
});

btn[1].addEventListener('click', () =>{
    contador++;
    document.getElementById('numContador').innerText = `${contador}`;
});

//Lista de Tarefas Básica

let tarefa = document.getElementById('tarefas');
let lista = document.getElementById('lista');

document.getElementById('btnTarefa').addEventListener('click', () =>{
    let nTarefa = document.createElement('li');
    nTarefa.innerHTML = tarefa.value;
    lista.appendChild(nTarefa);
    tarefa.value = "";
});
