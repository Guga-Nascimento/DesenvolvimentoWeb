// APLICAR ESTILOS INLINE COM JAVASCRIPT


// ======================================
// ESTUDO DE ESTILO INLINE COM JAVASCRIPT
// ======================================

// JavaScript é a linguagem que escreve os comandos.
// DOM é a estrutura da página que o navegador entrega ao JavaScript.
// Quando usamos element.style, estamos alterando o estilo inline do elemento.

// ======================================
// 1) CAPTURA DOS ELEMENTOS
// ======================================

const paragrafo = document.getElementById("paragrafo");
const botaoAplicar = document.getElementById("btn-aplicar");
const botaoResetar = document.getElementById("btn-resetar");
const saida = document.getElementById("saida");

// ======================================
// 2) FUNÇÃO PARA APLICAR ESTILOS INLINE
// ======================================

function aplicarEstiloInline() {
    paragrafo.style.backgroundColor = "#1d4ed8";
    paragrafo.style.color = "#ffffff";
    paragrafo.style.fontSize = "20px";
    paragrafo.style.fontWeight = "bold";
    paragrafo.style.border = "2px solid #93c5fd";
    paragrafo.style.padding = "20px";
    paragrafo.style.textAlign = "center";

    saida.textContent =
        "Foi aplicado estilo inline com JavaScript.\n\n" +
        "Leitura humana:\n" +
        "paragrafo.style.backgroundColor = '#1d4ed8'\n" +
        "=> Pegue o parágrafo e altere a cor de fundo dele.\n\n" +
        "Importante:\n" +
        "style é um recurso do DOM/navegador.\n" +
        "JavaScript apenas usa esse recurso para mudar o elemento.";
}

// ======================================
// 3) FUNÇÃO PARA RESETAR O ELEMENTO
// ======================================

function resetarEstilo() {
    paragrafo.style.backgroundColor = "";
    paragrafo.style.color = "";
    paragrafo.style.fontSize = "";
    paragrafo.style.fontWeight = "";
    paragrafo.style.border = "";
    paragrafo.style.padding = "";
    paragrafo.style.textAlign = "";

    saida.textContent =
        "Os estilos inline foram removidos.\n\n" +
        "Quando colocamos uma string vazia em element.style.propriedade,\n" +
        "o navegador deixa de usar aquele estilo inline e volta para o CSS normal.";
}

// ======================================
// 4) EVENTOS DOS BOTÕES
// ======================================

botaoAplicar.addEventListener("click", aplicarEstiloInline);
botaoResetar.addEventListener("click", resetarEstilo);