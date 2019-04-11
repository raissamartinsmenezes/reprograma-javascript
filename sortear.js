
// é um array pois dentro dele tem uma lista de frases
var frases = [
    "frase 1",
    "frase 2",
    "frase 3",
]

/* vou criar um html com um titulo, uma imagem e um parágrafo vazio e puxar o atibuto onclick=sortearFrases() 
dentro da imagem e o resultado vai aparecer no id="paragrafo" */
function sortearFrases(){
    var random = Math.floor(Math.random() * 20);
    document.getElementById("paragrafo").innerHTML = frases[random];
};