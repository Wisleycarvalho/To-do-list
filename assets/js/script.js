const button = document.querySelector('.button')
const input = document.querySelector('.input')
const lista = document.querySelector('.list')

let listaDeItens = [];


button.addEventListener('click', function adicionaItensALista() {
    listaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = '';

    mostrarTarefas()
})

function mostrarTarefas() {
    let li = ''

    listaDeItens.forEach((item, posicao) => {

        li += `
            <li class="task ${item.concluida && "done"}">
                <img class = "icones" src="./assets/imagens/check.png" alt="check" onclick = tarefaConcluida(${posicao})>
                <p> ${item.tarefa}</p>
                <img class = "icones" src="./assets/imagens/cancel.png" alt="cancel" onclick = "excluirItem(${posicao})">
            </li>
    `

    })

    lista.innerHTML = li;

    localStorage.setItem('lista', JSON.stringify(listaDeItens))

}

function tarefaConcluida(posicao){
    listaDeItens[posicao].concluida = !listaDeItens[posicao].concluida;

    mostrarTarefas()
}

function excluirItem(posicao){
    listaDeItens.splice(posicao, 1)
    mostrarTarefas()
    
}

function recarregarTarefas(){
    const itensLocalStorage = localStorage.getItem('lista')

    if(itensLocalStorage){
    listaDeItens = JSON.parse(itensLocalStorage)
    }

    mostrarTarefas()
}

recarregarTarefas();

