const alunas = [
    {
        nome: "Nina",
        idade: 15,
        materia: "JavaScript"
    },
    {
        nome: "Rafa",
        idade: 21,
        materia: "Lógica"
    },
    {
        nome: "Isa",
        idade: 30,
        materia: "JavaScript"
    }
];

let returnIdade = alunas.map((item) => {
    return item.idade
});

let returnAlunas = alunas.filter((item) => {
    if(item.idade == 30) {
        return alunas[length];
    }
});


let returnMateria = alunas.find((item) => {
    if(item.materia == 'JavaScript') {
        return alunas[length];
    }
});

// document.body.innerHTML = returnIdade(alunas);
// document.body.innerHTML += returnAlunas(alunas);
// document.body.innerHTML += returnMateria(alunas);


