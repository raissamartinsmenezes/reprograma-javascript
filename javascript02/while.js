
let pegarSenha = prompt('Digite a senha');
let senha = '0120'

while (pegarSenha !== senha) {
    alert('senha incorreta');
    if (pegarSenha == senha){
        alert('senha correta');
    }
}

// ô loco irmão - funcionooooooooooou!!!!

/* eu não posso declarar a senha antes, senão ele não entra no do, o campo está vazio,
ela ainda está valendo nada, e só valerá algo a partir de digitada ;) você não pode declarar o que 
você está pedindo para o usuário a nãp ser que seja if else, porque é algo que ele aciona várias 
vezes e não acontece em loop automático através do while */

let senha = "" 

do {

    senha = prompt('Digite a senha');

    if(senha == '0120') {
        alert('senha correta');
    } else {
        alert('senha incorreta');
    }
     
} while (senha != '0120');


// socorro

let senha = parseInt(prompt('Digite a senha'));
let senhaCorreta = 0120;

do {
    if(senha !== senhaCorreta) {
        alert('está errado');
        senha = parseInt(prompt('Digite a senha correta'));
    } 
        
} while (senha == senhaCorreta) {
    alert('acertou');
}


// minha nossa senhora

let senha = '0120'
let senhaCorreta = prompt('Digite uma senha');


if(senhaCorreta == senha){
    do {
        senhaCorreta = prompt('Digite uma senha');
    } while(senha !== senhaCorreta);
    
    if(senhaCorreta == senha){
        alert('Você acertou');
    }
} else {
    alert('Você acertou de primeira');
}


// jessica

window.addEventListener('DOMContentLoaded', function() {

    let senha = '1234'
    let password = (prompt('Digite uma senha')) //document.querySelector('#caixa');
    
    
    if(password!=senha){
        do{
        password=(prompt('Digite sua senha'))
        }
        while(password !=senha);
        
        if(password==senha){
            alert('Você entrou');
        }
    }
    
    else{
        alert('Você entrou no sistema')
    }
    
    });

//  









