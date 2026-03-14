// Pegando e Armazenando o formulário
const form = document.getElementById('contactForm');

// Cancelando o restar do Formulário
form.addEventListener('submit', e => {
    e.preventDefault();

    // Pegando e Armazenando os Elementos do Formulário
    const nome = document.getElementById('nome');
    const idade = document.getElementById('idade');

    // Pegando a Div da mensagem
    const mensagem = document.getElementById('mensagem')

    // Pegando os Valores do Input
    let nomeValor = nome.value.trim();
    let idadeValor =  idade.value.trim();

    mensagem.innerHTML = `Obrigado ${nomeValor}`;

    form.reset()

})