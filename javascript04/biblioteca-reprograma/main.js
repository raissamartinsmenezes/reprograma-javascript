const {livros} = autores //autores.livros = livros 

const numeroDeLivros = document.getElementById('numeroDeLivros')

numeroDeLivros.innerHTML = autores.livros.length

const listarLivros = document.getElementById('listarLivros')
const listarAutores = document.getElementById('listarAutores')
const listarGenero = document.getElementById('listarGenero')

listarLivros.addEventListener('click', () => {
  const insertRows = rows => {
    let table = ''
    rows.forEach((livros) => {
      table += `
        <tr>
          <td>${livros.livro}</td>
        </tr>
      `
    })
    return table
  }

  document.getElementById('table').innerHTML = insertRows (autores.livros)

})

listarAutores.addEventListener('click', () => {
  const insertRows = rows => {
    let table = ''
    rows.forEach((livros) => {
      table += `
        <tr>
          <td>${livros.autor}</td>
        </tr>
      `
    })
    return table
  }


  document.getElementById('table').innerHTML = insertRows (autores.livros)

})

listarGenero.addEventListener('click', () => {
  const insertRows = rows => {
    let table = ''
    rows.forEach((livros) => {
      table += `
        <tr>
          <td>${livros.genero}</td>
        </tr>
      `
    })
    return table
  }


  document.getElementById('table').innerHTML = insertRows (autores.livros)

})



// const insertRows = rows => {
//   let table = ''
//   rows.forEach((livros) => {
//     table += `
//       <tr>
//         <td>${livros.livro}</td>
//       </tr>
//     `
//   })
//   return table
// }

// document.getElementById('table').innerHTML = insertRows (autores.livros) 

// const insertRows = rows => {
//   let table = ''
//   rows.forEach((livros) => {
//     table += `
//       <tr>
//         <td>${livros.autor}</td>
//       </tr>
//     `
//   }) 
//   return table
// }

// --------------------------------------------------------------

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



// --------------------------------------------------------

// const orderList = (livroA, livroB, propriedade) => {
//     if (livroA[propriedade].toLowerCase() < livroB[propriedade].toLowerCase()) {
//         return -1
//     } if (livroA[propriedade].toLowerCase() > livroB[propriedade].toLowerCase()) {
//         return 1 
//     } return 0
// }

// const ordenarLivros = document.getElementById('ordenarLivros')
// const ordenarAutores = document.getElementById('ordenarAutores')
// const ordenarGenero = document.getElementById('ordenarGenero')

// ordenarLivros.addEventListener('click', () => {
//     const listaOrdenada = autores.livros.sort((livroA, livroB) => orderList (livroA, livroB, 'livro'))
//     document.getElementById('table-section').innerHTML = insertRows(listaOrdenada) 
// })

// ordenarAutores.addEventListener('click', () => {
//     const listaOrdenada = autores.livros.sort((livroA, livroB) => orderList (livroA, livroB,'autor'))
//     document.getElementById('table-section').innerHTML = insertRows(listaOrdenada) 
// })

// ordenarGenero.addEventListener('click', () => {
//     const listaOrdenada = autores.livros.sort((livroA, livroB) => orderList (livroA, livroB, 'genero'))
//     document.getElementById('table-section').innerHTML = insertRows(listaOrdenada) 
// })

// document.getElementById('table').innerHTML = insertRows (autores.livros) 
// console.log(livros.livro)
// document.getElementById('table').innerHTML = insertRows (livros.autor) 
// console.log(livros.autor)
// document.getElementById('tableGenero').innerHTML += insertRowsGenero(autores.genero) 
