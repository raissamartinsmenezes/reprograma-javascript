window.addEventListener('DOMContentLoaded', function (event) {

    const cachorros = ['abgail', 'phoebe', 'pato', 'sujinho', 'bolinha', 'chuchu'];
    const mostrarDogs = document.getElementById('mostrarDogs');
    const quantidade = document.getElementById('quantidade');
    quantidade.innerHTML = cachorros.length;

    cachorros.forEach(function(item, index) {
        // console.log(item, index);
        // mostrarDogs.innerHTML = cachorros;
        const listaNomes = document.createElement('p');
        listaNomes.innerHTML = item;
        mostrarDogs.appendChild(listaNomes);
    });

});   

// window.addEventListener('DOMContentLoaded', function() {
  
//     let sovietDogs = ['Laika', 'Strelka', 'Belka', 'Mushka', 'Pchyolka', 'Chernushka', 'Zvyozdochka', 'Veterok', 'Ugolyok'];
//     let dogList = document.getElementById('dog__list');
//     let dogItem;

//     sovietDogs.forEach(function(item, index){

//         if (dogItem == undefined) {
//             dogItem = `<li>${item}</li>`;
//         } else {
//             dogItem += `<li>${item}</li>`;
//         }
        
//     });

//     dogList.innerHTML = dogItem;

// });