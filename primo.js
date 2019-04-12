/* 
Crie uma função indique se o número passado por parâmetro é primo ou não. 
Lembrando: todo número primo é apenas divisível por 1 e por ele mesmo.
*/

function primo(numero){
    for (var contador = 2; contador < numero; contador++){
        if(numero % 2 === 0){
            return false;
        }
    }
    return true; 
}