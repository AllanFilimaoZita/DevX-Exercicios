const mensagem = document.querySelector('h1');
const button = document.querySelector('button');


button.addEventListener('click', function() {
    mensagem.innerText = "Clicado"
})