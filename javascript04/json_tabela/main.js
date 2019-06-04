// const listaDeAutores = JSON.stringify(autores)
// const listaDeAutoresJs = JSON.parse(listaDeAutores)

const insertRows = rows => {
  let table = ''
  // diferença entre map (retorna um array) e forEach (passar pelo array)
  rows.forEach((livro) => {
    table += `
      <tr>
        <td>${livro.livro}</td>
        <td>${livro.autor}</td>
        <td>${livro.genero}</td>
      </tr>
    `
  })
  return table
}

// const ordenarLivros = document.getElementById('ordenarLivros')

// ordenarLivros.addEventListener('click', () => {
//     const listaOrdenada = autores.livros.sort((livroA, livroB) => {
//         if (livroA.livro.toLowerCase() < livroB.livro.toLowerCase()) {
//             return -1
//         } if (livroA.livro.toLowerCase() > livroB.livro.toLowerCase()) {
//             return 1 
//         } return 0
//     })

//     document.getElementById('table-section').innerHTML = insertRows(listaOrdenada) 
// })

// const ordenarAutores = document.getElementById('ordenarAutores')

// ordenarAutores.addEventListener('click', () => {
//     const listaOrdenada = autores.livros.sort((livroA, livroB) => {
//         if (livroA.autor.toLowerCase() < livroB.autor.toLowerCase()) {
//             return -1
//         } if (livroA.autor.toLowerCase() > livroB.autor.toLowerCase()) {
//             return 1 
//         } return 0
//     })

//     document.getElementById('table-section').innerHTML = insertRows(listaOrdenada) 
// })

// const ordenarGenero = document.getElementById('ordenarGenero')

// ordenarGenero.addEventListener('click', () => {
//     const listaOrdenada = autores.livros.sort((livroA, livroB) => {
//         if (livroA.genero.toLowerCase() < livroB.genero.toLowerCase()) {
//             return -1
//         } if (livroA.genero.toLowerCase() > livroB.genero.toLowerCase()) {
//             return 1 
//         } return 0
//     })

//     document.getElementById('table-section').innerHTML = insertRows(listaOrdenada) 
// })

const orderList = (livroA, livroB, propriedade) => {
    if (livroA[propriedade].toLowerCase() < livroB[propriedade].toLowerCase()) {
        return -1
    } if (livroA[propriedade].toLowerCase() > livroB[propriedade].toLowerCase()) {
        return 1 
    } return 0
}

const ordenarLivros = document.getElementById('ordenarLivros')
const ordenarAutores = document.getElementById('ordenarAutores')
const ordenarGenero = document.getElementById('ordenarGenero')

ordenarLivros.addEventListener('click', () => {
    const listaOrdenada = autores.livros.sort((livroA, livroB) => orderList (livroA, livroB, 'livro'))
    document.getElementById('table-section').innerHTML = insertRows(listaOrdenada) 
})

ordenarAutores.addEventListener('click', () => {
    const listaOrdenada = autores.livros.sort((livroA, livroB) => orderList (livroA, livroB,'autor'))
    document.getElementById('table-section').innerHTML = insertRows(listaOrdenada) 
})

ordenarGenero.addEventListener('click', () => {
    const listaOrdenada = autores.livros.sort((livroA, livroB) => orderList (livroA, livroB, 'genero'))
    document.getElementById('table-section').innerHTML = insertRows(listaOrdenada) 
})

document.getElementById('table-section').innerHTML = insertRows(autores.livros) 
