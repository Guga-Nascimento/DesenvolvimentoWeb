// ======================================
// EVENT HANDLERS NO DOM
// ======================================

// JavaScript é a linguagem.
// DOM é a estrutura da página no navegador.
// addEventListener é um método do DOM usado para ouvir eventos.

// ======================================
// 1) CAPTURA DOS ELEMENTOS
// ======================================

const titulo = document.getElementById("titulo");
const botaoAlterar = document.getElementById("btn-alterar");
const botaoVoltar = document.getElementById("btn-voltar");
const saida = document.getElementById("saida");

// ======================================
// 2) FUNÇÃO PARA ALTERAR O TÍTULO
// ======================================

function alterarTitulo() {
    titulo.textContent = "O título foi alterado com um evento de clique";
    titulo.classList.add("titulo-alterado");

    saida.textContent =
        "O botão recebeu um clique e disparou uma função.\n\n" +
        "Leitura humana:\n" +
        "botaoAlterar.addEventListener('click', alterarTitulo)\n" +
        "=> Quando acontecer um clique no botão, execute a função alterarTitulo.\n\n" +
        "Neste caso, a função mudou o texto do h1 e adicionou uma classe CSS.";
}

// ======================================
// 3) FUNÇÃO PARA RESTAURAR O TÍTULO
// ======================================

function voltarTitulo() {
    titulo.textContent = "Texto do título desta página";
    titulo.classList.remove("titulo-alterado");

    saida.textContent =
        "O título voltou ao estado original.\n\n" +
        "Aqui usamos outro evento de clique para restaurar o texto e remover a classe.";
}

// ======================================
// 4) EVENTOS
// ======================================

botaoAlterar.addEventListener("click", alterarTitulo);
botaoVoltar.addEventListener("click", voltarTitulo);