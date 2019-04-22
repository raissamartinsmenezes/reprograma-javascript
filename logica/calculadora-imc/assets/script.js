function calculoIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resposta = document.getElementById("resposta");
    var lugarGif = document.getElementById("lugarGif");
    var resultado = peso / (altura * altura);
    var text;
    var gif;
    var cssclass;
    // console.log("O seu IMC é: " + resultado.toFixed(2));

    if(resultado < 18){
        text = "Uma deusa!";
        gif = `<img src="https://media.giphy.com/media/11wsZr0jbXc15m/giphy.gif" alt="">`
        cssclass = "linha1"
    }

    else if(resultado >= 18 && resultado < 25){
        text = "Uma louca!";
        gif = `<img src="https://media.giphy.com/media/d1oud1UJkvt9S/giphy.gif" alt="">`
        cssclass = "linha2"
    }

    else if(resultado >= 25 && resultado < 30){
        text = "Uma feiticeira!";
        gif = `<img src="https://media.giphy.com/media/2R3ncVdMKjYkM/giphy.gif" alt="">`
        cssclass = "linha3"
    }

    else if(resultado >=30 && resultado < 40){
        text = "Ela é demais!";
        gif = `<img src="https://media.giphy.com/media/3o6gb1nuwA2URMi1G0/giphy.gif" alt="">`
        cssclass = "linha4"
    }

    else{
        text = "Meu Deus, ela é demais!";
        gif = `<img src="https://media.giphy.com/media/yxrF8blMstF3a/giphy.gif" alt="">`
        cssclass = "linha5"
    }

    resposta.innerHTML = "O seu IMC é: " + resultado.toFixed(2) + ' - ' + text;
    resposta.className = cssclass;
    lugarGif.innerHTML = gif;

}