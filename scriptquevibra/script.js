var elogios = [
    "Diva sem defeitos",
    "Não é GitHub, mas é gatinha",
    "Máquina de vencer",
    "Perfeita",
    // "Ícone incompreendida",
    // "Responsivo #SQN",
    "Maravilinda",
    "Jóia rara",
    "Fada sensata",
    "Cristal",
    // "Zero defeitos",
    "Um pãozinho",
    "Deusa",
];

function elogiar(){
    var random = Math.floor(Math.random() * elogios.length);
    document.getElementById("titulo").innerHTML = elogios[random];
}
