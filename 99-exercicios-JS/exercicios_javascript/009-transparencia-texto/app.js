/* ----------------------------------------------------------------------------
Exercício: 009
Enunciado:
Exercício simples: O texto é branco e o elemento range vai servir para
alterar a transparência do texto. Do valor mais opaco à esquerda, até
à transparência total à direita.

NOTA: Deves definir os valores do range.
---------------------------------------------------------------------------- */

// ========================================
// SELEÇÃO DOS ELEMENTOS
// ========================================

// Seleciona o texto que terá a transparência alterada
const texto = document.getElementById('texto');

// Seleciona o input range
const range = document.getElementById('range');


// ========================================
// EVENTO DO RANGE
// ========================================

// Sempre que o valor do range mudar, a opacidade do texto será atualizada
range.addEventListener('input', function () {

    // O range vai de 0 até 100
    // A opacidade precisa ir de 0 até 1
    const opacidade = range.value / 100;

    // Aplica a opacidade ao texto
    texto.style.opacity = opacidade;
});