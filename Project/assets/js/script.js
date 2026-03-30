// Pegar o Container Principal
const section = document.querySelector('#container');

// Pegar o Formulárion
const form = document.querySelector('#form');
form.addEventListener('submit', e => {
    e.preventDefault()
})

form.reset()

// Pegar o Input
const inputTask = document.querySelector('input')

console.log(inputTask.value)