const isANumber = numero => {
    return new Promise((resolve, reject) => {
        (typeof numero !== 'number') ? reject('deu ruim') : resolve('ok')
    })
}

const returnPromise = numero => {
    return new Promise((resolve, reject) => { 
        if (numero % 2 === 1) {
            setTimeout(() => {
                resolve ('ímpar')
            }, 1000)
        } if (numero % 2 === 0) {
            setTimeout(() => {
                resolve ('par')
            }, 2000)
        }    
    })  
}

function job(data) {
    isANumber(data)
    .then(() => returnPromise(data))
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))
}

// OUTRA RESOLUÇÃO 
// ver a resolução da Mayara 
// 
