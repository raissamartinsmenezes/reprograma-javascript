function calcular () {

    let notaA = parseFloat(document.getElementById("notaA").value);
    let notaB = parseFloat(document.getElementById("notaB").value);
    let media = (notaA + notaB) / 2;

    // console.log('funcionou');

    if (media == 10) {
        alert("Distinção");
    } else if (media >= 7) {
        alert("Aprovado");
    } else {
        alert("Reprovado");
    }

    // código da Maria Rita
    // if (media >= 7)
    //     if (media == 10)
    //     alert("Uau! Aprovado com distinção");
    //     else 
    //     alert("Parabéns, aprovado!");
    // else 
    // alert("Reprovado");
    
}