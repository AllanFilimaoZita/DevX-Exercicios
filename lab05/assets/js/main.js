function adicionar() {
    // Pegar o elemento pai onde a div vai ser adicionada
    const formulario = document.getElementById('formulario');
    // Criar o elemento div
    const div = document.createElement('div');

    // Adicionar o conteúdo
    div.innerHTML = "teste"

    formulario.appendChild(div)

}