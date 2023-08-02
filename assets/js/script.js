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
            <li class="task">
                <img class = "icones" src="./assets/imagens/check.png" alt="check" onclick = tarefaConcluida(${posicao})>
                <p> ${item.tarefa}</p>
                <img class = "icones" src="./assets/imagens/cancel.png" alt="cancel" onclick = "excluirItem(${posicao})">
            </li>
    `

    })

    lista.innerHTML = li;
}

function tarefaConcluida(posicao){
    console.log(posicao)
}

function excluirItem(posicao){
    listaDeItens.splice(posicao, 1)
    mostrarTarefas()
    
}