// Criando uma função de adicionar as tarefas
function adicionar() {
    // Pegar o elemento input
    const inputTarefa = document.getElementById('tarefa');
    // Pegar o valor do input
    const valorTarefa = inputTarefa.value.trim();
    // Pegar o elemento ul
    const lista = document.getElementById('lista');
    // Criar uma divsão
    const caixinha = document.createElement('div');
    // Criar uma Lista de Item
    const li = document.createElement('li');

    // Criar o Botão de Remover
    const remover = document.createElement('button')
    
    // Inserir o valor no Botão
    remover.innerText = "Remover"
    
    // Inserir o valor do Input na Lista de Item
    li.innerText = valorTarefa;
    
    // Inserir a Lista de Item na div
    caixinha.innerText = "";

    // Adicionar os Elementos no elemento pai
    lista.append(caixinha);
    caixinha.append(li, remover);

    inputTarefa.value = ""

}