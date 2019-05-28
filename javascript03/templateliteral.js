// template literal

// exercício 1
// Crie um input através do template literal

var newInput = () => {
    return (
        `<input type='text' value=''>`
    )
}
document.body.innerHTML = newInput();

// exercício 2
// Crie um input através do template literal que receba o value por parâmetro

var newInput = (value) => {
    return (
        `<input type='text' value='${value}'>`
    )
}
document.body.innerHTML = newInput('nina');

// exercício 3
// Crie uma lista ul através do array abaixo com template string.

var array = ["JavaScript", "ES5", "ES6", "React"];

var novaLista = (data) => {
    return data.map((item) => {
        return (
            `<ul>
                <li>${item}</li>
            </ul>`
        )
    });
}
document.body.innerHTML = novaLista(array);