// =========================================
// MANIPULAR CSS COM className E classList
// =========================================

// JavaScript é a linguagem.
// DOM é a estrutura da página no navegador.
// className e classList pertencem ao elemento do DOM.

// =========================================
// 1) CAPTURA DOS ELEMENTOS
// =========================================

const caixa = document.getElementById("caixa");
const saida = document.getElementById("saida");

const btnClassname = document.getElementById("btn-classname");
const btnAdd = document.getElementById("btn-add");
const btnRemove = document.getElementById("btn-remove");
const btnToggle = document.getElementById("btn-toggle");
const btnCheck = document.getElementById("btn-check");

// =========================================
// 2) FUNÇÃO PARA MOSTRAR O ESTADO ATUAL
// =========================================

function mostrarClasses(mensagem) {
    saida.textContent =
        `${mensagem}\n\n` +
        `Class atual do elemento:\n${caixa.className}\n\n` +
        `Leitura humana:\n` +
        `caixa.className mostra todas as classes em formato de texto.\n` +
        `caixa.classList mostra uma lista de classes do elemento.`;
}

// =========================================
// 3) EXEMPLOS COM className
// =========================================

function trocarComClassName() {
    caixa.className = "container container-light";

    mostrarClasses(
        "Foi usada a propriedade className para trocar todas as classes do elemento."
    );
}

// =========================================
// 4) EXEMPLOS COM classList.add()
// =========================================

function adicionarClasseLight() {
    caixa.classList.remove("container-dark");
    caixa.classList.add("container-light");

    mostrarClasses(
        "Foi usado classList.add('container-light') para adicionar a classe light."
    );
}

// =========================================
// 5) EXEMPLOS COM classList.remove()
// =========================================

function removerClasseLight() {
    caixa.classList.remove("container-light");
    caixa.classList.add("container-dark");

    mostrarClasses(
        "Foi usado classList.remove('container-light') para remover a classe light."
    );
}

// =========================================
// 6) EXEMPLOS COM classList.toggle()
// =========================================

function alternarClasses() {
    caixa.classList.toggle("container-light");
    caixa.classList.toggle("container-dark");

    mostrarClasses(
        "Foi usado classList.toggle() para alternar entre as classes dark e light."
    );
}

// =========================================
// 7) EXEMPLO COM classList.contains()
// =========================================

function verificarClasse() {
    if (caixa.classList.contains("container-dark")) {
        mostrarClasses(
            "A classe 'container-dark' existe no elemento."
        );
    } else {
        mostrarClasses(
            "A classe 'container-dark' não existe no elemento."
        );
    }
}

// =========================================
// 8) EVENTOS
// =========================================

btnClassname.addEventListener("click", trocarComClassName);
btnAdd.addEventListener("click", adicionarClasseLight);
btnRemove.addEventListener("click", removerClasseLight);
btnToggle.addEventListener("click", alternarClasses);
btnCheck.addEventListener("click", verificarClasse);