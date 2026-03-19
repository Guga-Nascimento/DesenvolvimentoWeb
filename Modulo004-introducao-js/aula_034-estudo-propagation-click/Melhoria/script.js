/*
OBJETIVO:
Adicionar 3 eventos de clique:
- um na section
- um no article
- um na div

Cada elemento deve exibir uma mensagem própria
e os cliques devem ser independentes.

Neste exemplo, usamos stopPropagation()
para impedir que o clique suba para o elemento pai.
*/


// =====================================================
// 1) Seleção dos elementos do HTML
// =====================================================
// Aqui estamos pegando os elementos do navegador/DOM
// para poder trabalhar com eles no JavaScript.

let section = document.querySelector('section');
let article = document.querySelector('article');
let div = document.querySelector('div');
let mensagem = document.getElementById('mensagem');


// =====================================================
// 2) Função para atualizar a mensagem na tela
// =====================================================
// Esta função evita repetição de código.
// Sempre que algum elemento for clicado,
// vamos reutilizar esta função.

function mostrarMensagem(texto) {
    mensagem.textContent = texto;
}


// =====================================================
// 3) Evento de clique da section
// =====================================================
// Quando clicar na section:
// - o clique para nela
// - não sobe para outro elemento pai
// - mostra mensagem própria

section.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('section');
    mostrarMensagem('Você clicou na SECTION.');
});


// =====================================================
// 4) Evento de clique do article
// =====================================================
// Quando clicar no article:
// - o clique para nele
// - não sobe para a section
// - mostra mensagem própria

article.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('article');
    mostrarMensagem('Você clicou no ARTICLE.');
});


// =====================================================
// 5) Evento de clique da div
// =====================================================
// Quando clicar na div:
// - o clique para nela
// - não sobe para article nem section
// - mostra mensagem própria

div.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('div');
    mostrarMensagem('Você clicou na DIV.');
});