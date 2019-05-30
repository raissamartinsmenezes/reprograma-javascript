let fotografias = [
    {
        posicao: '01',
        url: 'https://github.com/reprograma',
        imagem: 'images/pic01.jpg',
        titulo: 'Primeiro',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        posicao: '06',
        url: 'https://github.com/reprograma',
        imagem: 'images/pic02.jpg',
        titulo: 'Segundo Card',
        descricao: 'Interdum amet accumsan placerat commodo ut Card aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        posicao: '05',
        url: 'https://github.com/reprograma',
        imagem: 'images/pic03.jpg',
        titulo: 'Terceiro',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        posicao: '02',
        url: 'https://github.com/reprograma',
        imagem: 'images/pic04.jpg',
        titulo: 'Quarto Card',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        posicao: '03',
        url: 'https://github.com/reprograma',
        imagem: 'images/pic05.jpg',
        titulo: 'Quinto',
        descricao: 'Interdum amet accumsan placerat Card ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        posicao: '04',
        url: 'https://youtu.be/s6zR2T9vn2c',
        imagem: 'images/pic06.jpg',
        titulo: 'Sexto Card',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },

]

// const createSearch = () => {
//     return (
//         `  
//         <input type="text" onKeyUp="limpar(this.value)" class="input__search"/>
//         <button id="buscar">Pesquisar</button>
//         `
//     )
// }

// let getSearch = document.querySelector('.search');
// getSearch.innerHTML += createSearch();

// document.querySelector('.search').innerHTML += pesquisa();


// no parâmetro (fotografias), ele pode ser genérico pois na inserção logo
// após a função, você dá o parâmetro do array escolhido
const createCards = (fotografias) => {
    // também poderia ser assim, abaixo:
    // let mostrarFotografias = fotografias.map((item)
    // => {
    // })
    return fotografias.map((item) => {
        //console.log(item)
        // função void retorna vazia
        return (
            `
            <div class="box">
                <img src=${item.imagem} alt="" class="image fit"/>
                <div class="inner">
                    <h3>${item.titulo}</h3>
                    <p>${item.descricao}</p>
                    <a href=${item.url} class="button fit"
                    data-poptrox="youtube,800x400">Watch</a>
                </div>
            </div>
            `
        )
    }).join('');
}

document.querySelector('.thumbnails').innerHTML += createCards(fotografias);

// const search = (e) => {
    // tentar resolver sem a construção de variáveis 
// }

const clickBtn = document.getElementById('buscar');

clickBtn.addEventListener('click', () => {

    let inputValue = document.querySelector('.input__search').value.toLowerCase();
    let returnFilter = fotografias.filter((palavra) => {
        return palavra.titulo.toLowerCase().includes(inputValue) || palavra.descricao.toLowerCase().includes(inputValue);
    });

    // console.log(returnFilter);

    document.querySelector('.thumbnails').innerHTML = createCards(returnFilter);

});

function limpar(value) {
    if(!value == '') {
        // criar uma variável pois estamos usando várias vezes
        document.querySelector('.thumbnails').innerHTML = createCards(fotografias);  
    }
}


var botaoOrdenar = () => {
    var ordenar = fotografias.sort((anterior, atual) => {
        return anterior.posicao < atual.posicao ? -1 : 0
    });
    document.querySelector('.thumbnails').innerHTML = createCards(ordenar);
}




// += para não sobrescrever o result do map

// olhar a utilização do sort() na resolução da professora
