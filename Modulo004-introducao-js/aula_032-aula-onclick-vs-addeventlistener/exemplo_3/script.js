// ======================================
// DEFININDO EVENT LISTENERS
// ======================================

// JavaScript é a linguagem.
// DOM é a estrutura da página no navegador.
// addEventListener é um método do DOM usado para ouvir eventos.

// ======================================
// 1) CAPTURA DOS ELEMENTOS
// ======================================

const titulo = document.getElementById("titulo");
const saida = document.getElementById("saida");

const btnFuncaoNomeada = document.getElementById("btn-funcao-nomeada");
const btnFuncaoAnonima = document.getElementById("btn-funcao-anonima");
const btnArrow = document.getElementById("btn-arrow");
const btnEvento = document.getElementById("btn-evento");
const btnResetar = document.getElementById("btn-resetar");

// ======================================
// 2) FUNÇÃO NOMEADA
// ======================================

function eventoFuncaoNomeada() {
    titulo.textContent = "Texto alterado com função nomeada";
    titulo.classList.add("titulo-ativo");

    saida.textContent =
        "Aqui usamos uma função nomeada.\n\n" +
        "Leitura humana:\n" +
        "btn.addEventListener('click', eventoFuncaoNomeada)\n" +
        "=> Quando clicar, execute a função chamada eventoFuncaoNomeada.";
}

// ======================================
// 3) EVENTO DO BOTÃO 1
// ======================================

btnFuncaoNomeada.addEventListener("click", eventoFuncaoNomeada);

// ======================================
// 4) EVENTO COM FUNÇÃO ANÔNIMA
// ======================================

btnFuncaoAnonima.addEventListener("click", function () {
    titulo.textContent = "Texto alterado com função anônima";
    titulo.classList.add("titulo-ativo");

    saida.textContent =
        "Aqui usamos uma função anônima.\n\n" +
        "Ela não recebeu nome.\n" +
        "Foi criada diretamente dentro do addEventListener().";
});

// ======================================
// 5) EVENTO COM ARROW FUNCTION
// ======================================

btnArrow.addEventListener("click", () => {
    titulo.textContent = "Texto alterado com arrow function";
    titulo.classList.add("titulo-ativo");

    saida.textContent =
        "Aqui usamos uma arrow function.\n\n" +
        "É uma forma mais curta de escrever função em JavaScript.";
});

// ======================================
// 6) EVENTO COM OBJETO event
// ======================================

btnEvento.addEventListener("click", (e) => {
    console.log("clique");
    e.target.textContent = "Botão alterado";
    titulo.textContent = "Texto alterado com event";
    titulo.classList.add("titulo-ativo");

    saida.textContent =
        "Aqui usamos o objeto event.\n\n" +
        "e.target representa o elemento que disparou o evento.\n" +
        "Neste caso, foi o botão clicado.";
});

// ======================================
// 7) RESET
// ======================================

btnResetar.addEventListener("click", () => {
    titulo.textContent = "Texto original";
    titulo.classList.remove("titulo-ativo");

    btnEvento.textContent = "Usar event";

    saida.textContent = "Clique em um botão para testar cada forma.";
});