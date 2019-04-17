window.addEventListener('DOMContentLoaded', function (event) {

    // declarar o array com os gifs
    const gif = [
        './holdon.gif',
        './7-11.gif',
        './formation.gif',
        './loveontop.gif',
    ];

    const respostas = [
        'Hold On',
        '7/11',
        'Formation',
        'Love On Top',
    ];

    // declarar e pegar o botão
    const geradorGif = document.getElementById('geradorGif');

    // criar um evento de click no botão
    geradorGif.addEventListener('click', function () {

        document.getElementById('lugarGif').src = gif[0]; 
        setTimeout(function(){document.getElementById('lugarGif').src = gif[1]}, 4000);
        setTimeout(function(){document.getElementById('lugarGif').src = gif[2]}, 8000);
        setTimeout(function(){document.getElementById('lugarGif').src = gif[3]}, 12000);
        setTimeout(function(){document.getElementById('lugarGif').src = ""}, 14000);
        // setTimeout(function(){ document.getElementById('respostasClipes').innerHTML = respostas}, 16000);

        respostas.forEach(function(item, index) {
            setTimeout(function(){ 
            const nomesMusicas = document.createElement('p');
            nomesMusicas.innerHTML = item;
            respostasClipes.appendChild(nomesMusicas);
        
        }, 14000);
            
        });

    });


});








