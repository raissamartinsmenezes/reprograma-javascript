function palindromo(){
    var palavra = document.getElementById("input").value.toLowerCase();
    var resposta = document.getElementById("resposta");
    
    for(var cont = 0; cont < palavra.length/2; cont++){
        if(palavra[cont] !== palavra[palavra.length -1 -cont]){
            resposta.innerText = "Não é! 👎";
            return
        }
        else{
            resposta.innerText = "Sim! 🤩";
        }
    }
}