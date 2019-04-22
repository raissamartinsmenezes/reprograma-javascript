let titulo = document.querySelector('h1');
// getElementByTagName não funciona pois h1 não é estrutural, apenas
// com elementos estruturais funciona

// o DOM 
titulo.textContent = 'Eu sou um título'

let texto = document.querySelector('.HERO');
texto.style.color = 'red';
texto.style.backgroundColor = '#fff';

