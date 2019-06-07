const userInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const form = document.querySelector('#login-form')

form.addEventListener('submit', event => {
    event.preventDefault()
    const bodyParaEnviar = JSON.stringify({
        // validar se os campos estão preenchidos colocando dentro de um if
        user: userInput.value,
        pass: passwordInput.value
    })
    fetch('https://lais-api-reprograma.herokuapp.com/login', {
        method: 'POST',
        body: bodyParaEnviar,
        headers: {
            'Accept': 'application/json', // o que eu estou mandando 
            'Content-type': 'application/json' // o que estou recebendo 
        }
    })
    .then(resposta => resposta.json())
    .then(objetoJavascritp => {
        localStorage.setItem('token', objetoJavascritp.token)
        window.location.href = 'home.html'
    })
    .catch(error => console.log(error))
})

