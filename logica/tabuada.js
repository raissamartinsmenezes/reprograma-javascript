/*
Crie uma função que imprima na tela uma tabuada seguindo o padrão:
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
*/ 

function tabuada(a, b){
    for(var i = 1; i <= b; i++){
        console.log(a + ' x ' + i + ' = ' + (a * i))
    }
}