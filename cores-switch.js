    
/*
Usando a estrutura SWITH, crie uma função que transforme quatro cores passadas por parâmetro em formato 'string', para o seu equivalente hexadecimal. Crie casos para 4 cores.

Se a cor passada não estiver entre as que você selecionou, mostre a seguinte frase "Não temos o equivalente hexadecimal para [cor]".
*/

function transformaCor(){
    switch(cor){
        case 'black':
            console.log("O hexadecimal de " + cor + " é #000000")
            break; 
        case 'white':
            console.log("O hexadecimal de " + cor + " é #FFFFFF")
            break;
        case 'red':
            console.log("O hexadecimal de " + cor + " é #FF0000")
            break;
        case 'blue':
            console.log("O hexadecimal de " + cor + " é #0000FF")
            break;
        case 'green':
            console.log("O hexadecimal de " + cor + " é #00FF00")
            break;
        default:
            console.log("Não temos o equivalente hexadecimal para " + cor)

    }
}