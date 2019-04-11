var pessoa = {
    nome: "josi",
    idade: 22,
    aniversario: function(){ //método
        pessoa.idade++ 
        // pessoa.idade = pessoa.idade + 1
    }
}

//prompt (abre um input)
//alert (dá um alerta)

// var converter = function()
function conversao(){
    var bitcoin = prompt("quantos bitcoins você quer converter?");
    var cotacao = prompt("quantos reais valem 1 bitcoin hoje?");

    var resultado = bitcoin * cotacao;
    alert("Você teria " + resultado)
    // return resultado (também chama o resultado só que sem o prompt de alerta)
}

// conversao() > vai chamar o prompt para realizar a função no console.log