window.addEventListener('DOMContentLoaded', function (event) {

    const escolhePais = document.getElementById('escolhePais');
    const escolheCidade = document.getElementById('escolheCidade');
    const frase = document.getElementById('frase');
    const cidade = document.getElementById('cidade');

    escolhePais.addEventListener('change', function () {

        cidade.classList.add('cidade');
        frase.innerHTML = ``;

        if (escolhePais.value == 'australia') {
            frase.innerHTML = `🍫 Minha amiga vai ganhar dois ovos de chocolate branco 🍬`;

        } else if (escolhePais.value == 'brasil') {
            cidade.classList.remove('cidade');
            
            escolheCidade.addEventListener('change', function () {
                
                if (escolheCidade.value == 'caxias') {
                    frase.innerHTML = `🍫 Minha amiga vai ganhar um ovo de chocolate ao leite e um ovo de chocolate branco 🍬`;

                } else if (escolheCidade.value == 'porto') {
                    frase.innerHTML = `🍫 Minha amiga vai ganhar um ovo de chocolate amargo e um ovo de chocolate ao leite 🍬`;

                } else if (escolheCidade.value == 'default'){
                    frase.innerHTML = ``;

                } else {
                    frase.innerHTML = `🍫 Minha amiga vai ganhar duas caixas de bombons 🍬`;
                } 
            });

        } else if (escolhePais.value == 'eua') {
            frase.innerHTML = `🍫 Minha amiga vai ganhar dois ovos de chocolate ao leite 🍬`;

        } else if (escolhePais.value == 'default'){
            frase.innerHTML = ``;

        } else {
            frase.innerHTML = `🍫 Minha amiga vai ganhar dois ovos de chocolate amargo 🍬`;

        } 
    });

});