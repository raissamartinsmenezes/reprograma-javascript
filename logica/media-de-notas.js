function media(a, b, c){
    var a, b, c;
    // tive que colocar parênteses na soma porque a divisão tem mais peso
    var resultado = (a + b + c) / 3;
    if( resultado > 5) {
        console.log("Você passou!");
    }

    else {
        console.log("Você foi reprovado!");
    }
}
