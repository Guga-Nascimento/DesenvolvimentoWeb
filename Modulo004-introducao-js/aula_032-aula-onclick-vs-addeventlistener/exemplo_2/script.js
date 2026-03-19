// ======================================
// ESTUDO DE addEventListener
// ======================================

// JavaScript é a linguagem.
// DOM é a estrutura da página no navegador.
// addEventListener é um método do DOM para ouvir eventos.

// ======================================
// 1) CAPTURA DOS ELEMENTOS
// ======================================

const botao = document.getElementById("botao");
const resetar = document.getElementById("resetar");
const titulo = document.getElementById("titulo");
const saida = document.getElementById("saida");

// ======================================
// 2) LISTENER 1
// ALTERA O TEXTO DO H1
// ======================================

botao.addEventListener("click", function () {
    titulo.textContent = "Texto alterado";
    titulo.classList.add("titulo-alterado");
});

// ======================================
// 3) LISTENER 2
// ESCREVE NO CONSOLE
// ======================================

botao.addEventListener("click", function () {
    console.log("clique");
});

// ======================================
// 4) LISTENER 3
// EXPLICA O QUE ACONTECEU
// ======================================

botao.addEventListener("click", function () {
    saida.textContent =
        "Foram executados vários listeners no mesmo clique.\n\n" +
        "1) Um listener alterou o texto do h1.\n" +
        "2) Outro listener escreveu 'clique' no console.\n\n" +
        "Isso mostra a principal vantagem de addEventListener():\n" +
        "podemos registrar várias funções para o mesmo evento.";
});

// ======================================
// 5) RESET
// ======================================

resetar.addEventListener("click", function () {
    titulo.textContent = "Texto original";
    titulo.classList.remove("titulo-alterado");
    saida.textContent = "Clique no botão para ver o que acontece.";
});