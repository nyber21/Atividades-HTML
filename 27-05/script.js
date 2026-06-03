let contador = 0;

function AdicionarTarefa() {
    const inputElement = document.getElementById('nova_tarefa');
    const mensagemElement = document.getElementById('mensagem');
    const listaTarefas = document.getElementById("lista_tarefas");

    let tarefa = inputElement.value;
    let mensagem, cor;

    if (tarefaValida(tarefa)) {
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);
        contador++;

        mensagem = "Adicionado com sucesso";
        cor = 'green';
        document.getElementById("mensagem_saudacao").textContent = "Adicione Tarefas (" + contador + ")";
        document.getElementById("Limpador").style.display = "block";

    } else {
        mensagem = "Tarefa invalida, redigite.";
        cor = 'red';
    }

    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;

    inputElement.focus();
    inputElement.value = '';
}

function tarefaValida(tarefa) {
    return tarefa.trim().length >= 5;
}

function LimparTarefas() {
    const listaTarefas = document.getElementById("lista_tarefas");
    listaTarefas.replaceChildren();
    contador = 0;
    
    document.getElementById("mensagem_saudacao").textContent = "Adicione Tarefas!";
    document.getElementById('mensagem').textContent = '';
    document.getElementById("Limpador").style.display = "none";
}