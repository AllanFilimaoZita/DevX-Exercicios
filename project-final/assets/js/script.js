document.querySelector('button').addEventListener('click', inscricao);

function inscricao() {
    const nome = document.getElementById('nome').value.trim();
    const idade = Number(document.getElementById('idade').value.trim());

    if (!nome || !idade) {
        alert('Preencha todos os campos!');
        return;
    }

    if (idade >= 18) {
        alert(`Inscrição de ${nome} feita com sucesso!`);
    } else {
        alert(`${nome}, você não tem idade suficiente para se inscrever.`);
    }
}