window.addEventListener('DOMContentLoaded', function (event) {

    const botao = document.getElementById('botao');

    botao.addEventListener('click', function () {

        const certa = document.querySelectorAll("input[name=certo]:checked").length;
        const resultado = document.getElementById('resultado');

        // alert('Selecione as opções para mostrar o resultado!');

        if (certa == 1) {
            resultado.innerHTML = 'Legal, você conhece um pouco de literatura inglesa!';
        } else if (certa == 2) {
            resultado.innerHTML = 'Uau, você realmente curte literatura inglesa!';
        } else if (certa == 3) {
            resultado.innerHTML = 'Mitou, lê muito! ;)';
        } else {
            resultado.innerHTML = 'Ixi, saia das redes sociais e vá ler um livro, vá!';
        } 

        console.log('foi')

    });


});