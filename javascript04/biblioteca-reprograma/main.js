const {livros} = autores 

const numeroDeLivros = document.getElementById('numeroDeLivros')

numeroDeLivros.innerHTML = autores.livros.length

const listarLivros = document.getElementById('listarLivros')
const listarAutores = document.getElementById('listarAutores')
const listarGenero = document.getElementById('listarGenero')

const showdDisponiveis = propriedade => {
  document.getElementById('disponiveis').innerHTML = 
  `
  <th colspan="3"><span>${propriedade}</span> disponíveis
  <button id="ordenarAZ"><i class="fas fa-sort-alpha-down"></i></button>
  <button id="ordenarZA"><i class="fas fa-sort-alpha-up"></i></button>
  </th>
  ` 
} 

const insertRows = (rows, propriedade) => {
  let table = ''
  rows.forEach((livros) => {
    table += `
      <tr>
        <td colspan="3">${livros[propriedade]}</td>
      </tr>
    `
  })
  return table
}

const orderListAZ = (livroA, livroB, propriedade) => {
    if (livroA[propriedade].toLowerCase() < livroB[propriedade].toLowerCase()) {
        return -1
    } if (livroA[propriedade].toLowerCase() > livroB[propriedade].toLowerCase()) {
        return 1 
    } return 0
}

const orderListZA = (livroA, livroB, propriedade) => {
  if (livroA[propriedade].toLowerCase() < livroB[propriedade].toLowerCase()) {
      return 1
  } if (livroA[propriedade].toLowerCase() > livroB[propriedade].toLowerCase()) {
      return -1 
  } return 0
}

listarLivros.addEventListener('click', () => {

  showdDisponiveis('Livros')
  
  document.getElementById('table').innerHTML = insertRows (livros, 'livro')

  document.getElementById('ordenarAZ').addEventListener ('click', () => {
    const listaOrdenada = livros.sort((livroA, livroB) => orderListAZ(livroA, livroB, 'livro'))
    console.log(listaOrdenada)
    document.getElementById('table').innerHTML = insertRows (listaOrdenada, 'livro')
    
  })

  document.getElementById('ordenarZA').addEventListener ('click', () => {
    const listaOrdenada = livros.sort((livroA, livroB) => orderListZA(livroA, livroB, 'livro'))
    console.log(listaOrdenada)
    document.getElementById('table').innerHTML = insertRows (listaOrdenada, 'livro')
    
  })

})

listarAutores.addEventListener('click', () => {

  showdDisponiveis('Autores')
  
  document.getElementById('table').innerHTML = insertRows (livros, 'autor')

  document.getElementById('ordenarAZ').addEventListener ('click', () => {
    const listaOrdenada = livros.sort((livroA, livroB) => orderListAZ(livroA, livroB, 'autor'))
    console.log(listaOrdenada)
    document.getElementById('table').innerHTML = insertRows (listaOrdenada, 'autor')
    
  })

  document.getElementById('ordenarZA').addEventListener ('click', () => {
    const listaOrdenada = livros.sort((livroA, livroB) => orderListZA(livroA, livroB, 'autor'))
    console.log(listaOrdenada)
    document.getElementById('table').innerHTML = insertRows (listaOrdenada, 'autor')
    
  })

})

listarGenero.addEventListener('click', () => {

  showdDisponiveis('Gêneros')
  
  document.getElementById('table').innerHTML = insertRows (livros, 'genero')

  document.getElementById('ordenarAZ').addEventListener ('click', () => {
    const listaOrdenada = livros.sort((livroA, livroB) => orderListAZ(livroA, livroB, 'genero'))
    console.log(listaOrdenada)
    document.getElementById('table').innerHTML = insertRows (listaOrdenada, 'genero')
    
  })

  document.getElementById('ordenarZA').addEventListener ('click', () => {
    const listaOrdenada = livros.sort((livroA, livroB) => orderListZA(livroA, livroB, 'genero'))
    console.log(listaOrdenada)
    document.getElementById('table').innerHTML = insertRows (listaOrdenada, 'genero')
    
  })

})



