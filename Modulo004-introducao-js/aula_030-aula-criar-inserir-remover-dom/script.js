// ==========================================
// CRIAR, INSERIR E REMOVER ELEMENTOS NO DOM
// ==========================================

// JavaScript é a linguagem.
// DOM é a estrutura da página no navegador.
// Métodos como createElement, append, before e remove
// pertencem ao document ou aos elementos do DOM.

// ==========================================
// 1) CAPTURA DOS ELEMENTOS
// ==========================================

const areaElementos = document.getElementById("area-elementos");
const saida = document.getElementById("saida");

const btnCriarParagrafo = document.getElementById("btn-criar-paragrafo");
const btnCriarDiv = document.getElementById("btn-criar-div");
const btnBefore = document.getElementById("btn-before");
const btnPrepend = document.getElementById("btn-prepend");
const btnAppend = document.getElementById("btn-append");
const btnAfter = document.getElementById("btn-after");
const btnRemover = document.getElementById("btn-remover");
const btnResetar = document.getElementById("btn-resetar");

// ==========================================
// 2) FUNÇÃO AUXILIAR PARA EXIBIR TEXTO
// ==========================================

function mostrarSaida(texto) {
    saida.textContent = texto;
}

// ==========================================
// 3) CRIAR PARÁGRAFO E ADICIONAR NO ELEMENTO 1
// ==========================================

function criarParagrafoNoElemento1() {
    const elemento1 = document.getElementById("elemento_1");

    if (!elemento1) {
        mostrarSaida("O elemento 1 não existe mais.");
        return;
    }

    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Este parágrafo foi criado com createElement() e adicionado com appendChild().";

    elemento1.appendChild(novoParagrafo);

    mostrarSaida(
        "Foi criado um novo <p> com document.createElement('p') e inserido no final do elemento 1 com appendChild().\n\n" +
        "Leitura humana:\n" +
        "document.createElement('p') = crie uma tag p.\n" +
        "elemento1.appendChild(novoParagrafo) = coloque essa tag dentro do elemento 1."
    );
}

// ==========================================
// 4) CRIAR NOVO BLOCO COMPLETO
// ==========================================

function criarNovoElemento4() {
    if (document.getElementById("elemento_4")) {
        mostrarSaida("O elemento 4 já foi criado.");
        return;
    }

    const novoDiv = document.createElement("div");
    novoDiv.classList.add("elemento");
    novoDiv.setAttribute("id", "elemento_4");

    const titulo = document.createElement("h2");
    titulo.textContent = "Título do elemento 4";

    const paragrafo = document.createElement("p");
    paragrafo.textContent = "Este bloco inteiro foi criado via JavaScript.";

    novoDiv.appendChild(titulo);
    novoDiv.appendChild(paragrafo);
    areaElementos.appendChild(novoDiv);

    mostrarSaida(
        "Foi criado um novo bloco completo com createElement(), classList.add(), setAttribute() e appendChild()."
    );
}

// ==========================================
// 5) INSERÇÕES RELATIVAS AO ELEMENTO 2
// ==========================================

function criarParagrafo(texto) {
    const p = document.createElement("p");
    p.textContent = texto;
    return p;
}

function inserirAntes() {
    const elemento2 = document.getElementById("elemento_2");
    if (!elemento2) return;

    elemento2.before(criarParagrafo("Parágrafo inserido antes do elemento 2."));
    mostrarSaida(
        "Foi usado before() para inserir um novo elemento antes do elemento 2."
    );
}

function inserirNoInicio() {
    const elemento2 = document.getElementById("elemento_2");
    if (!elemento2) return;

    elemento2.prepend(criarParagrafo("Parágrafo inserido no início do elemento 2."));
    mostrarSaida(
        "Foi usado prepend() para inserir um novo elemento no começo do elemento 2."
    );
}

function inserirNoFim() {
    const elemento2 = document.getElementById("elemento_2");
    if (!elemento2) return;

    elemento2.append(criarParagrafo("Parágrafo inserido no fim do elemento 2."));
    mostrarSaida(
        "Foi usado append() para inserir um novo elemento no final do elemento 2."
    );
}

function inserirDepois() {
    const elemento2 = document.getElementById("elemento_2");
    if (!elemento2) return;

    elemento2.after(criarParagrafo("Parágrafo inserido depois do elemento 2."));
    mostrarSaida(
        "Foi usado after() para inserir um novo elemento depois do elemento 2."
    );
}

// ==========================================
// 6) REMOVER ELEMENTO
// ==========================================

function removerElemento1() {
    const elemento1 = document.getElementById("elemento_1");

    if (!elemento1) {
        mostrarSaida("O elemento 1 já foi removido.");
        return;
    }

    elemento1.remove();

    mostrarSaida(
        "Foi usado remove() para apagar o elemento 1 do DOM."
    );
}

// ==========================================
// 7) RESETAR A AULA
// ==========================================

function resetarAula() {
    areaElementos.innerHTML = `
        <div class="elemento" id="elemento_1">
            <h2>Título do elemento 1</h2>
        </div>

        <div class="elemento" id="elemento_2">
            <h2>Título do elemento 2</h2>
        </div>

        <div class="elemento" id="elemento_3">
            <h2>Título do elemento 3</h2>
        </div>
    `;

    mostrarSaida("A estrutura original da aula foi restaurada.");
}

// ==========================================
// 8) EVENTOS
// ==========================================

btnCriarParagrafo.addEventListener("click", criarParagrafoNoElemento1);
btnCriarDiv.addEventListener("click", criarNovoElemento4);
btnBefore.addEventListener("click", inserirAntes);
btnPrepend.addEventListener("click", inserirNoInicio);
btnAppend.addEventListener("click", inserirNoFim);
btnAfter.addEventListener("click", inserirDepois);
btnRemover.addEventListener("click", removerElemento1);
btnResetar.addEventListener("click", resetarAula);