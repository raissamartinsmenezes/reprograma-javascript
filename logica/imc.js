function calcularIMC(){
    var altura = prompt("Qual a sua altura?");
    var peso = prompt("Qual o seu peso?");
    var calculo = (peso/(altura * altura)).toFixed(2);

    console.log("Seu IMC é igual a: " + calculo)

    if(calculo < 18.5){
        console.log("Abaixo do peso")
    }

    else if(calculo >=18.5 && calculo < 24.9){
        console.log("Peso normal")
    }

    else if(calculo >= 25 && calculo <= 29.9){
        console.log("Sobrepeso")
    }

    else{
        console.log("Obesidade")
    }

}