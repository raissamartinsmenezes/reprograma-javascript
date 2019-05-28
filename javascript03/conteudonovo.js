var usuarios = [
    {
        nome: 'Bruna',
        habilidades: ['Javascript', 'ReactJS', 'Redux']
    },
    {
        nome: 'Gabriela',
        habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
    }
];


function exibirHabilidades(usuarios) {

    // esse elemnto é uma nova variável 
    for (elemento of usuarios) {
         
        console.log(
            // ${elemento.habilidades.toString}
            `A ${elemento.nome} possui as habilidades: ${elemento.habilidades.join('-')}`
        )
    }

};

// funcionou
function exibirHabilidades() {
    var usuarios = [
        {
            nome: 'Bruna',
            habilidades: ['Javascript', 'ReactJS', 'Redux']
        },
        {
            nome: 'Gabriela',
            habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
        }
    ];

    // esse elemnto é uma nova variável 
    for (elemento of usuarios) {
         
        console.log(
            // ${elemento.habilidades.toString}
            `A ${elemento.nome} possui as habilidades: ${elemento.habilidades.join('-')}`
        )
    }

};

// arrow function

const sum = (num1, num2) => num1 + num2 

// propriedades do this na arrow function

// new String ()
// bind??


const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario);

// arrow da function acima

const mostraIdade = (usuario) => {
    return usuario.idade
}

mostraIdade(usuario);

