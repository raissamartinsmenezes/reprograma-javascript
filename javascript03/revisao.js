// exercicio 1
//Crie uma função que leia um valor e exiba se ele é par ou ímpar:

function num(x) {
    if (typeof(x) === 'number'){
        if (x % 2 == 0){
            console.log(`O número ${x} é par`)
        }
        else {
            console.log(`O número ${x} é ímpar`)
        }
    }
    else {
        console.log('Digite um número válido')
    }
}

// exercicio 2
//Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares(x, y) {
    for (i = x; i <= y; i++){
        if (i % 2 == 0){
            console.log (i);
        }
    }
}

// exercicio 3
// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) {
    if (anos >= 0 && anos <= 1){
        console.log("Iniciante");
    }
    else if (anos > 1 && anos <= 3){
        console.log("Intermediário");
    }
    else if (anos > 3 && anos <= 6){
        console.log("Avançado");
    }
    else if (anos >= 7){
        console.log("Jedi Master");
    }
    else{
        console.log("Digite um número inteiro acima de 0");
    }
}


// exercicio 4
// Crie um arquivo html que contenha uma lista com nomes, e a partir destes gere uma ul, onde cada li será gerado apresentando os nomes. Exemplo:

// function listaNomes(){
//     var nomes = ["Getúlia", "Juno", "Consuelo"];

//     for (i=0; i<nomes.length; i++) {
//         var lista = document.createElement('li');
//         document.getElementById("listaNomes").appendChild(lista);
//         lista.textContent = nomes[i];
//         console.log(nomes[i]);
//     }   
// }

//exercicio 5
// A partir do exercício 3, adicione um input e um botão, na qual seja possível inserir um valor, ao clicar no botão, o value do input deverá ser adicionado à lista e inserido na ul.

function listaNomes(){
    var nomeGato = prompt('Qual é o nome do seu gato?');
    var lista = document.createElement('li');
    lista.textContent = nomeGato;
    document.getElementById("listaNomes").appendChild(lista);
}


// função para limpar o input quando eu escrever nela
// function limpaInput() {
//     input.value = "";
// }


