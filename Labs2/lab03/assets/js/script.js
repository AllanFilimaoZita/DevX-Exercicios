// Pegar o elemento principal
const elemento = document.querySelector('.card');

// Pegar o botão remover
const paragraph = document.querySelector('p');

// Pegar o elemento de referencia
// const remover = elemento.closest('div');

const remover = paragraph.parentElement;

const button = document.querySelector('button').addEventListener('click', function() {
    remover.remove()
})
