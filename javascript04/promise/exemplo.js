const returnPromise = () => {
    return new Promise((resolve, reject) => { //criando um objeto ou instanciando, é uma classe nativa do javascript
        //resolve vai fazer ir para o próximo then
        //reject é tipo o catch(erro)
        setTimeout(() => {
            resolve('Hello World')
            //reject('To com fome!')
        }, 2000)
    })  
}

function job() {
    returnPromise() //se ela tiver uma promise //returnPromise().then > pode colocar em baixo 
    //para ir para o then ele precisa  primeiro cair no resolve da promise acima 
    .then(resolve => console.log(resolve)) //você cobra a promise com o then, senão, não
    //.catch(erro => console.log(erro)) //só vai funcionar se a Pomise cair em um reject 
}

job()

// -------------------------------------------------------------------------------
// OUTRA EXPLICAÇÃO

// const eMaiorQueCinco (numero) => {
//     return new Promise((resolve, reject) => {
//         numero > 5 ? resolve(numero + 'é maior que cinco') : reject(numero + 'é menor que cinco')
//     })
// }

// function job(num) {
//     eMaiorQueCinco(num)
//     .then(sucesso => console.log({sucesso}))
//     .catch(erro => console.log({erro}))
// }