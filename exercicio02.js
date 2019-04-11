// Crie uma função com dois argumentos, que retorna a subtração deles.

var sub = function(argumento1, argumento2){
    return argumento1 - argumento2;
}

/* function sub (a, b) {
    return a - b;
} */

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando "5" ao resultado retornado da função.

var x = sub(50, 5) + 5

// Qual o valor atualizado dessa variável?
50

// Declare uma nova variável, sem valor.
var roberta;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a seguinte mensagem:
    "O novo valor da minha variável agora é VALOR."
    (onde VALOR é o novo valor da variável).
*/

function chamaRoberta(){
    roberta = 15;
    console.log("O novo valor da minha variável é " + roberta)
}

// Invoque a função criada acima.

chamaRoberta()

// Qual o retorno da função? (Use comentários de bloco).
15

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando "2" ao resultado da multiplicação.
*/
function nome(arg1, arg2, arg3){
    if(arg1 == undefined || arg2 == undefined || arg3 == undefined){
        console.log("Defina os argumentos corretamente!");
    }
    // pode colocar o return dentro de um else 
    return arg1 * arg2 * arg3 + 2
}

// o if existe sem o else, mas o else não vive sem o if

// Invoque a função criada acima, passando só dois números como argumento.
// ok!

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// ok!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
// ok!

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// ok!

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne "Entrou no if"
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano "false".
6. E ainda, se nenhuma das condições acima forem atendidas, retorne "null".
*/

function tres(x, y, z){
    if(x && !y && !z){
        console.log('Entrou na primeira condição')
    }

    else if(x, y && !z){
        console.log('Entrou na segunda condição')
        return x + y
        // console.log(x + y)
    }

    else if(x, y, z){
        console.log('Entrou na terceira condição')
        return (x + y) / z 
    }
    
    else if(!x && !y && !z){
        console.log('Entrou na quarta condição')
        console.log(false)
    }

    else{
        return null 
    }

}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.