let num1 = 0;
for (i = 0; i <= 10; i++) {
    document.write('<br/>' + num1);
    num1++;
}

let num2 = 10;
for (i = 10; i >= 0; i--) {
    document.write('<br/>' + num2);
    num2--;
}

// outra forma

function exibir(){
    for(let a = 0, b = 10; a <= 10 && b >= 0; a++, b--)
    document.write(`${a} - ${b} <br/>`)
    // se quiser somar de três em três a+=3 
}

// tabuada do 5

function exibir(){
    let a = 5;
    for(let b = 0; b <= 10; b++) {
    document.write(`${a} x ${b} = ${a * b} <br/>`)
    }
}

// for(let a = 5; b <= 50; a+=5)

// for(let a = 5, i = 0; a <= 50 && i <= 10; a+=5, i++)
// document.write(' 5 x ' + i ' = ' + a + '<br/>');

