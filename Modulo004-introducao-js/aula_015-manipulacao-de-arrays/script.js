// =====================================
// MANIPULAÇÃO DE ARRAYS
// =====================================

let nomes = ["joao", "ana", "carlos"];

// Elementos da página
const arrayAtual = document.getElementById("arrayAtual");
const resultado = document.getElementById("resultado");

const btnMostrarTamanho = document.getElementById("btnMostrarTamanho");
const btnAdicionarFinal = document.getElementById("btnAdicionarFinal");
const btnAdicionarInicio = document.getElementById("btnAdicionarInicio");
const btnRemoverFinal = document.getElementById("btnRemoverFinal");
const btnRemoverInicio = document.getElementById("btnRemoverInicio");
const btnAlterarSegundo = document.getElementById("btnAlterarSegundo");
const btnUsarSplice = document.getElementById("btnUsarSplice");
const btnResetar = document.getElementById("btnResetar");

// Atualiza o array mostrado na tela
function atualizarArrayNaTela() {
    arrayAtual.textContent = JSON.stringify(nomes);
}

// Mostrar quantidade de elementos
btnMostrarTamanho.addEventListener("click", function () {
    resultado.textContent = `O array possui ${nomes.length} elemento(s).`;
    atualizarArrayNaTela();
});

// Adicionar no final com push()
btnAdicionarFinal.addEventListener("click", function () {
    nomes.push("joaquim");
    resultado.textContent = 'Foi adicionado "joaquim" no final do array com push().';
    atualizarArrayNaTela();
});

// Adicionar no início com unshift()
btnAdicionarInicio.addEventListener("click", function () {
    nomes.unshift("jose");
    resultado.textContent = 'Foi adicionado "jose" no início do array com unshift().';
    atualizarArrayNaTela();
});

// Remover do final com pop()
btnRemoverFinal.addEventListener("click", function () {
    const removido = nomes.pop();

    if (removido === undefined) {
        resultado.textContent = "Não há elementos para remover no final.";
    } else {
        resultado.textContent = `Elemento removido do final: ${removido}`;
    }

    atualizarArrayNaTela();
});

// Remover do início com shift()
btnRemoverInicio.addEventListener("click", function () {
    const removido = nomes.shift();

    if (removido === undefined) {
        resultado.textContent = "Não há elementos para remover no início.";
    } else {
        resultado.textContent = `Elemento removido do início: ${removido}`;
    }

    atualizarArrayNaTela();
});

// Alterar o segundo elemento
btnAlterarSegundo.addEventListener("click", function () {
    if (nomes.length > 1) {
        nomes[1] = "maria";
        resultado.textContent = 'O segundo elemento foi alterado para "maria".';
    } else {
        resultado.textContent = "Não existe segundo elemento para alterar.";
    }

    atualizarArrayNaTela();
});

// Usar splice()
btnUsarSplice.addEventListener("click", function () {
    const eliminados = nomes.splice(1, 2, "joaquim", "manuel", "rui");

    resultado.textContent =
        `splice(1, 2, "joaquim", "manuel", "rui") executado.\n` +
        `Elementos removidos: ${JSON.stringify(eliminados)}`;

    atualizarArrayNaTela();
});

// Resetar array
btnResetar.addEventListener("click", function () {
    nomes = ["joao", "ana", "carlos"];
    resultado.textContent = "O array foi resetado para o estado inicial.";
    atualizarArrayNaTela();
});

// Mostrar o array inicial ao abrir a página
atualizarArrayNaTela();