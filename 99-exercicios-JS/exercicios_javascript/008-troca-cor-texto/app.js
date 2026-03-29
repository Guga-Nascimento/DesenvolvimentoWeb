/* ----------------------------------------------------------------------------
Exercício: 008
Enunciado:
Existem 5 botões, cada um com uma cor diferente do Bootstrap.
A ideia é criar o código javascript que permita que o clique em cada
um dos botões altere o texto acima para a cor de fundo do botão.
---------------------------------------------------------------------------- */

// ========================================
// SELEÇÃO DOS ELEMENTOS
// ========================================

// Seleciona o texto que terá a cor alterada
/*const texto = document.getElementById('texto');

// Seleciona cada botão pelo id
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');


// ========================================
// EVENTOS DE CLIQUE
// ========================================

// Quando clicar no botão primário, o texto fica azul
btn1.addEventListener('click', function () {
    texto.style.color = 'blue';
});

// Quando clicar no botão informativo, o texto fica azul claro
btn2.addEventListener('click', function () {
    texto.style.color = '#b20cf3';
});

// Quando clicar no botão sucesso, o texto fica verde
btn3.addEventListener('click', function () {
    texto.style.color = 'green';
});

// Quando clicar no botão perigo, o texto fica vermelho
btn4.addEventListener('click', function () {
    texto.style.color = 'red';
});

// Quando clicar no botão aviso, o texto fica amarelo/dourado
btn5.addEventListener('click', function () {
    texto.style.color = 'goldenrod';
});  008-troca-cor-texto */

const cores = ['primary', 'info', 'success', 'danger', 'warning'];

document.querySelectorAll('[id^="btn"]').forEach((elemento) => {

    elemento.addEventListener('click', (btn) => {
        let index = btn.target.id.substring(3,4) -1;

        document.querySelector("h3").className = "text-" + cores[index];
    })
    
});