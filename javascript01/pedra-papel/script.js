window.addEventListener('DOMContentLoaded', function (event) {

//    const comecando = document.getElementById('vamosComecar');
   const jogando = document.getElementById('jogar');
   const comecando = document.getElementById('vamosComecar');
  
    // comecando.addEventListener('click', function (){
        
    // });
   
    jogando.addEventListener('click', function (){

        const opcoesDoComputador = ['pedra', 'papel', 'tesoura', 'lagarto', 'spock'];
        const random = Math.floor(Math.random() * opcoesDoComputador.length);
        const escolhaDoComputador = opcoesDoComputador[random];
        const escolhaDoJogador = document.getElementById('opcoesJogador').value;
        const resultado = document.getElementById('resultado');
        const nomeDoJogador = document.getElementById('nomeJogador');
      
        if (escolhaDoJogador == 'pedra') {
            switch (escolhaDoComputador) {
                case 'pedra':
                    resultado.innerHTML = 'Empate, jogue novamente! 🎲'
                    break;
                case 'papel':
                    resultado.innerHTML = `${nomeDoJogador.value} perdeu e o computador ganhou! 📃 Papel cobre pedra 🗿`
                    break;
                case 'tesoura':
                    resultado.innerHTML = '🗿 Pedra esmaga tesoura ✂️'
                    break;
                case 'lagarto':
                    resultado.innerHTML = '🗿 Pedra esmaga lagarto 🦎'
                    break;
                case 'spock':
                    resultado.innerHTML = '🖖🏻 Spock vaporiza a pedra 🗿'
                    break;
            };
            
        };

        
        if (escolhaDoJogador == 'papel') {
            switch (escolhaDoComputador) {
                case 'pedra':
                    resultado.innerHTML = '📃 Papel cobre pedra 🗿'
                    break;
                case 'papel':
                    resultado.innerHTML = 'Empate, jogue novamente! 🎲'
                    break;
                case 'tesoura':
                    resultado.innerHTML = '✂️ Tesoura corta papel 📃'
                    break;
                case 'lagarto':
                    resultado.innerHTML = '🦎 Lagarto come papel 📃'
                    break;
                case 'spock':
                    resultado.innerHTML = '📃 Papel desqualifica spock 🖖🏻'
                    break;
            };
            
        };
        
        if (escolhaDoJogador == 'tesoura') {
            switch (escolhaDoComputador) {
                case 'pedra':
                    resultado.innerHTML = '🗿 Pedra esmaga tesoura ✂️'
                    break;
                case 'papel':
                    resultado.innerHTML = '✂️ Tesoura corta papel 📃'
                    break;
                case 'tesoura':
                    resultado.innerHTML = 'Empate, jogue novamente! 🎲'
                    break;
                case 'lagarto':
                    resultado.innerHTML = '✂️ Tesoura decapita lagarto 🦎'
                    break;
                case 'spock':
                    resultado.innerHTML = '🖖🏻 Spock quebra tesoura ✂️'
                    break;
            };
            
        };

        
        if (escolhaDoJogador == 'lagarto') {
            switch (escolhaDoComputador) {
                case 'pedra':
                    resultado.innerHTML = '🗿 Pedra esmaga lagarto 🦎'
                    break;
                case 'papel':
                    resultado.innerHTML = '🦎 Lagarto come papel 📃'
                    break;
                case 'tesoura':
                    resultado.innerHTML = '✂️ Tesoura decapita lagarto 🦎'
                    break;
                case 'lagarto':
                    resultado.innerHTML = 'Empate, jogue novamente! 🎲'
                    break;
                case 'spock':
                    resultado.innerHTML = '🦎 Lagarto enveneva spock 🖖🏻'
                    break;
            };
            
        };
        
        if (escolhaDoJogador == 'spock') {
            switch (escolhaDoComputador) {
                case 'pedra':
                    resultado.innerHTML = '🖖🏻 Spock vaporiza a pedra 🗿'
                    break;
                case 'papel':
                    resultado.innerHTML = '📃 Papel desqualifica spock 🖖🏻'
                    break;
                case 'tesoura':
                    resultado.innerHTML = '🖖🏻 Spock quebra tesoura ✂️'
                    break;
                case 'lagarto':
                    resultado.innerHTML = '🦎 Lagarto enveneva spock 🖖🏻'
                    break;
                case 'spock':
                    resultado.innerHTML = 'Empate, jogue novamente! 🎲'
                    break;
            };
            
        };
            

    });
    

});