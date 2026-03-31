const taskForm = document.getElementById('taskForm');
let listTask = [];

// Função render: lê o array e redesenha a lista
function render() {
    const lista = document.getElementById('listTask');

    // Para cada item do array, cria um <li>
    lista.innerHTML = listTask
        .map(task => `<li>${task}</li>`)
        .join('');
}

taskForm.addEventListener('submit', e => {
    e.preventDefault();

    const inputTask = document.getElementById('task');
    const task = inputTask.value.trim();

    // Validação: não adiciona tarefa vazia
    if (!task) return;

    taskForm.reset();

    // 1. Atualiza o estado
    listTask.push(task);

    // 2. Redesenha a UI
    render();
});