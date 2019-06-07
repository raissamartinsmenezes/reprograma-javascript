const checkUser = () => {
    if (localStorage.getItem('token')) {
        getUser()
    } else {
        window.location.href = "index.html"
    }
}

const getUser = () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(objJavascript => {
            document.getElementById('profile').innerHTML =
                criaPainel(objJavascript.results[0])
            document.getElementById('username').innerHTML =
                objJavascript.results[0].name.first
        })
        .catch(erro => console.log(erro))
}

const criaPainel = (user) => {
    console.log({ user })
    return `
        <div class=" panel text-center padding">
            <figure class="image is-128x128 margin-auto padding">
                <img src="${user.picture.medium}" alt="" class="is-rounded">
            </figure>

          <div class="content">
            <p>
              <strong>${user.name.firstc} ${user.name.last}</strong>
              <br>
              <i class="fas fa-mobile-alt"></i>
              <small>${user.cell}</small>
            </p>
          </div>

          <div>
            <button class="button is-warning" onclick="testarAPI()">Testar API</button>
          </div>

          <div>
            <div class="column">
              <div><i class="far fa-envelope"></i></div>
              <small>${user.email}</small>
            </div>
          </div>
          
          <div>
            <div><i class="fas fa-map-marker-alt"></i></div>
            <small>${user.location.city} ${user.location.state}
            ${user.location.street} ${user.location.postcode}</small>
          </div>

          <div>
            <div><i class="far fa-calendar"></i></div>
            <small>${user.dob.date}</small>
          </div>

          <div class="content padding">
            <button class="button is-danger" onclick="signOut()">
              Sair
            </button>
          </div>
        </div>
    `
}

const testarAPI = () => {
    fetch('https://lais-api-reprograma.herokuapp.com/resource', { // o fecth por default é GET
        headers: {
            'Accept': 'application/json', // o que eu estou mandando 
            'Content-type': 'application/json', // o que estou recebendo
            // autorização para acessar o recurso
            'Authorization': `Bearer ${localStorage.getItem('token')}`
            // bearer padrão de segurança para acessar o local Storage 
        }
    })
        .then(res => res.json())
        .then(result => alert('sucesso'))
        .catch(erro => alert('erro'))
}

const signOut = () => {
    localStorage.clear()
    window.location.href = 'index.html'
}
checkUser()