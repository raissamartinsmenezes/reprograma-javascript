const cepInput = document.getElementById('cep')
const logradouroInput = document.getElementById('logradouro')
const complementoInput = document.getElementById('complemento')
const bairroInput = document.getElementById('bairro')
const localidadeInput = document.getElementById('localidade')
const ufInput = document.getElementById('uf')
const cepError = document.getElementById('cep-error')

// FUNÇÃO DE TESTE
// const exibeResultado = objeto => {
//     console.log(objeto)
//     // começando a montar o HTML
//     let endereco =
//     `
//     <div>
//     <h3>ENDEREÇO</h3>
//         <p>cep: ${objeto.cep}</p>
//         <p>logradouro: ${objeto.logradouro}</p>
//         <p>complemento: ${objeto.complemento}</p>
//         <p>bairro: ${objeto.bairro}</p>
//         <p>localidade: ${objeto.localidade}</p>
//         <p>uf: ${objeto.uf}</p>
//     </div>
//     `
//     document.getElementById('exibe-endereco').innerHTML = endereco
// }

// criando uma função que vai receber como parâmetro uma url 
const getData = url => {
    return new Promise ((resolve, reject) => {
    // instanciar um objeto a partir de outro 
    const requisicao = new XMLHttpRequest() // uma classe gigante e dentro você utiliza os métodos do script para fazer uma requisição para um navegador, também é utilizado para pegar arquivos 
    // requisicao.onload() assim você consegue acessar as funcionalidades de dentro da classe
    requisicao.open('GET', url) // assíncrono
    requisicao.onload = function(){
        if(requisicao.status === 200){
            console.log(requisicao.responseText)
            const resposta = JSON.parse(requisicao.responseText) // se eu não fizer isso eu não consigo acessar o objeto, pois ele vai me retornar um texto
            resolve(resposta)
            // exibeResultado(resposta) // pegar a resposta para imprimir no HTML 
            // dá pra fazer sem a promise colocando tudo no if, mas isso é má prática, pois cada função precisa realizar apenas uma coisa 
        } else {
            reject('CEP INVÁLIDO')
        }
    }
    // requisicao.responseText
    console.log({requisicao})
    requisicao.onerror = () => {
        reject('CEP INVÁLIDO') // o certo é reject('Erro de conexão')
    }
    requisicao.send() // tipo o send do postman 
})
}

cepInput.addEventListener('blur', () => {
    const valorDoCampo = cepInput.value
    console.log(cepInput.value)
    if (valorDoCampo) { // validar primeiro para depois rodar, com a propriedade required no campo do input ele executava o getData e caia no reject da requisicao.onerror()
        getData(`https://viacep.com.br/ws/${valorDoCampo}/json/`) //eu preciso do valor dessa função como estávamos fazendo antes ela só executava e não retornava, por isso tivemos que colocar uma promise
            .then(resultadoAPI => {
                console.log(resultadoAPI)
                cepInput.classList.remove('error')
                cepError.innerHTML = ''
                cepInput.value = resultadoAPI.cep
                logradouroInput.value = resultadoAPI.logradouro
                complementoInput.value = resultadoAPI.complemento
                bairroInput.value = resultadoAPI.bairro
                localidadeInput.value = resultadoAPI.localidade
                ufInput.value = resultadoAPI.uf
            })
            .catch(erro => {
                console.log({ erro })
                cepInput.classList.add('error')
                cepError.innerHTML = erro
                cepInput.value = ''
                logradouroInput.value = ''
                complementoInput.value = ''
                bairroInput.value = ''
                localidadeInput.value = ''
                ufInput.value = ''
            })
    } else {
        cepInput.classList.add('error')
        cepError.innerHTML = 'Campo obrigatório'
    }
})

// getData('http://viacep.com.br/ws/01223001/json/')


// EXPLICAÇÃO -----------------------

// class XMLHttpRequest {
//     onload(){
//         return dado
//     }
//     send(){
//         funcao()
//     } 
// }

// 07411000
