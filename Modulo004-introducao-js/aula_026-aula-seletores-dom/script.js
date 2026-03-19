// =========================================
// ESTUDO DE SELETORES COM querySelector()
// E querySelectorAll()
// =========================================

// Este arquivo usa JavaScript para pedir ao navegador
// que encontre elementos da página usando seletores CSS.
// O JavaScript escreve a instrução.
// O DOM do navegador executa a busca nos elementos HTML.

// =========================================
// 1) REFERÊNCIAS INICIAIS
// =========================================

const botaoAnalisar = document.getElementById("btn-analisar");
const resultado = document.getElementById("resultado");

// =========================================
// 2) FUNÇÃO AUXILIAR PARA MOSTRAR RESULTADOS
// =========================================

function mostrarLinha(titulo, valor) {
    return `${titulo}: ${valor}`;
}

// =========================================
// 3) FUNÇÃO PRINCIPAL DE ANÁLISE
// =========================================

function analisarSeletores() {
    // -----------------------------------------
    // Seletor universal: *
    // Busca todos os elementos da página
    // -----------------------------------------
    const todosElementos = document.querySelectorAll("*");

    // -----------------------------------------
    // Seletor por tipo/tag: p
    // Busca o primeiro <p>
    // -----------------------------------------
    const primeiroParagrafo = document.querySelector("p");

    // Busca todos os <p>
    const todosParagrafos = document.querySelectorAll("p");

    // -----------------------------------------
    // Seletor por classe: .texto
    // Busca o primeiro elemento com class="texto"
    // -----------------------------------------
    const primeiraClasseTexto = document.querySelector(".texto");

    // Busca todos os elementos com class="texto"
    const todasClassesTexto = document.querySelectorAll(".texto");

    // -----------------------------------------
    // Seletor por id: #texto
    // Busca o elemento com id="texto"
    // -----------------------------------------
    const elementoPorId = document.querySelector("#texto");

    // -----------------------------------------
    // Seletores por atributo
    // -----------------------------------------
    const elementosComName = document.querySelectorAll("[name]");
    const paragrafosComName = document.querySelectorAll("p[name]");
    const nameTexto = document.querySelectorAll('[name="texto"]');
    const classComPalavraLetra = document.querySelectorAll('[class~="letra"]');
    const classComecaColor = document.querySelectorAll('[class^="color"]');
    const classTerminaSize = document.querySelectorAll('[class$="size"]');
    const classContemText = document.querySelectorAll('[class*="text"]');

    // -----------------------------------------
    // Agrupamento de seletores
    // Busca div, p e h1 ao mesmo tempo
    // -----------------------------------------
    const grupos = document.querySelectorAll("div, p, h1");

    // -----------------------------------------
    // Descendentes
    // Busca li dentro de div ul li
    // -----------------------------------------
    const descendentes = document.querySelectorAll("div ul li");

    // -----------------------------------------
    // Descendentes diretos
    // Busca h3 que sejam filhos diretos de div
    // -----------------------------------------
    const filhosDiretos = document.querySelectorAll("div > h3");

    // =========================================
    // 4) EXIBIÇÃO NA TELA
    // =========================================

    resultado.textContent =
        mostrarLinha("Total de elementos com '*'", todosElementos.length) + "\n" +
        mostrarLinha("Primeiro <p>", primeiroParagrafo ? primeiroParagrafo.textContent : "não encontrado") + "\n" +
        mostrarLinha("Quantidade de <p>", todosParagrafos.length) + "\n" +
        mostrarLinha("Primeiro '.texto'", primeiraClasseTexto ? primeiraClasseTexto.textContent : "não encontrado") + "\n" +
        mostrarLinha("Quantidade de '.texto'", todasClassesTexto.length) + "\n" +
        mostrarLinha("Elemento '#texto'", elementoPorId ? elementoPorId.textContent : "não encontrado") + "\n" +
        mostrarLinha("Elementos com [name]", elementosComName.length) + "\n" +
        mostrarLinha("Parágrafos com [name]", paragrafosComName.length) + "\n" +
        mostrarLinha('Elementos com [name="texto"]', nameTexto.length) + "\n" +
        mostrarLinha('Elementos com [class~="letra"]', classComPalavraLetra.length) + "\n" +
        mostrarLinha('Elementos com [class^="color"]', classComecaColor.length) + "\n" +
        mostrarLinha('Elementos com [class$="size"]', classTerminaSize.length) + "\n" +
        mostrarLinha('Elementos com [class*="text"]', classContemText.length) + "\n" +
        mostrarLinha("Elementos 'div, p, h1'", grupos.length) + "\n" +
        mostrarLinha("Elementos 'div ul li'", descendentes.length) + "\n" +
        mostrarLinha("Elementos 'div > h3'", filhosDiretos.length);
}

// =========================================
// 5) EVENTO DE CLIQUE
// =========================================

botaoAnalisar.addEventListener("click", analisarSeletores);