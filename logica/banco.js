var conta = {
    nome: "nubank",
    agencia: 0001,
    conta: 1010,
    saldo: 1,
}

var valor;

// function depositarDinheiros(valor){} > esse valor dentro da função funciona como um prompt da função
var depositarDinheiros = function(valor){
    // var valor;
    // conta.saldo += valor;
    conta.saldo = conta.saldo + valor;
    return conta.salario;    
}

var removerDinheiros = function(valor){
    // var valor;
    conta.saldo = conta.saldo - valor;
    return conta.salario;    
}

var consultarSaldo = function(){
    console.log("SALDO: " + conta.saldo)
    // da pra usar vírgula no lugar do + 
}

var mostrarTudo = function(){
    console.log("Nome: " + conta.nome);
    console.log("Nome: " + conta.agencia);
    console.log("Nome: " + conta.conta);
    console.log("Nome: " + conta.saldo);
}

