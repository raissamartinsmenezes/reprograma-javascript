function mudaFundo(){
    var meuBody = document.getElementById("fundo");
    if(meuBody.style.background == "white"){
        meuBody.style.background = "black";
        document.getElementById("mudaImagem").src = "./botao-desliga.png";
    }

    else{
        meuBody.style.background = "white";
        document.getElementById("mudaImagem").src = "./botao-liga.png";
    }

}

