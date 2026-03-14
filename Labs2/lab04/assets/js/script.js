// Pegar o Formulário de Tarefas
const taskForm = document.getElementById('taskForm');

// Criando um Array Vazio
let listTask = [];

// Cancelar o Reload do Formulário
taskForm.addEventListener('submit', e => {
    e.preventDefault();

    // Pegar o Elemnto Input
    const inputTask = document.getElementById('task');

    // Pegar o Valor do Elemento Input
    const task = inputTask.value.trim()

    // Pegar o Paragrafo
    const paragrafo = document.getElementById('listTask');

    // Reiniciando o Formulário
    taskForm.reset();

    listTask.push(task);

    paragrafo.innerHTML = listTask

})