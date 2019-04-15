window.addEventListener('DOMContentLoaded', function(event){
 
const getNumber = document.querySelector('#getNumber');
const result = document.getElementById('result');

getNumber.addEventListener('click', function (){

    const numberValue = document.querySelector('#number').value;

    if(isNaN(numberValue) || numberValue == "" || numberValue == " "){
        alert('Por favor digite um número');
    } else {
        if (numberValue == 0){
            result.innerHTML = `O ${numberValue} é neutro`;
        } else if (numberValue > 0){
            result.innerHTML = `O ${numberValue} é positivo`;
        } else {
            result.innerHTML = `O ${numberValue} é negativo`;
        }
    }

});



});