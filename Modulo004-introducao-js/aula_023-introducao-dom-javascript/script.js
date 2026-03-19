// ======================================================
// INTRODUÇÃO AO DOM
// ======================================================
//
// DOM = Document Object Model
// É a forma como o navegador organiza o HTML para que
// o JavaScript possa acessar e manipular os elementos.
//
// O objeto principal para começar é:
// document
//
// "document" representa a página carregada no navegador.

// ------------------------------------------------------
// 1) PEGANDO ELEMENTOS DO HTML
// ------------------------------------------------------
//
// document.getElementById("titulo")
// -> procura um elemento que tenha id="titulo"
//
// No HTML existe:
// <h1 id="titulo">Texto do título</h1>
//
// Então a linha abaixo guarda esse elemento em uma variável.
const titulo = document.getElementById("titulo");

// Pegando o subtítulo pelo id
const subtitulo = document.getElementById("subtitulo");

// Pegando o botão pelo id
const botao = document.getElementById("botao");

// Pegando a div de resultado
const resultado = document.getElementById("resultado");

// ------------------------------------------------------
// 2) PEGANDO VÁRIOS ELEMENTOS PELA CLASSE
// ------------------------------------------------------
//
// document.querySelectorAll(".texto")
// -> procura todos os elementos com class="texto"
//
// O ponto antes de "texto" indica classe no CSS selector.
const paragrafos = document.querySelectorAll(".texto");

// ------------------------------------------------------
// 3) MOSTRANDO NO CONSOLE O QUE FOI ENCONTRADO
// ------------------------------------------------------
console.log("Elemento título:");
console.log(titulo);

console.log("Elemento subtítulo:");
console.log(subtitulo);

console.log("Lista de parágrafos:");
console.log(paragrafos);

// ------------------------------------------------------
// 4) ALTERANDO TEXTO DE UM ELEMENTO
// ------------------------------------------------------
//
// textContent altera o texto do elemento.
titulo.textContent = "Aprendendo DOM com JavaScript";

// Também podemos alterar outro elemento
subtitulo.textContent = "O JavaScript está navegando no HTML";

// ------------------------------------------------------
// 5) USANDO O RESULTADO NA TELA
// ------------------------------------------------------
resultado.textContent =
    "O título e o subtítulo foram alterados pelo JavaScript.";

// ------------------------------------------------------
// 6) PERCORRENDO OS PARÁGRAFOS
// ------------------------------------------------------
//
// forEach percorre cada item da lista encontrada
paragrafos.forEach(function (paragrafo, indice) {
    console.log("Parágrafo número:", indice + 1);
    console.log(paragrafo.textContent);
});

// ------------------------------------------------------
// 7) ADICIONANDO EVENTO DE CLIQUE
// ------------------------------------------------------
//
// addEventListener("click", função)
// -> fica escutando um evento no elemento
//
// Quando o botão for clicado, a função será executada.
botao.addEventListener("click", function () {
    titulo.textContent = "Você clicou no botão!";
    resultado.textContent =
        "O evento de clique foi capturado com addEventListener().";
});