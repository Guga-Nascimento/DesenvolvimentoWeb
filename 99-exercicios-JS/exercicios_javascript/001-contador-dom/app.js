/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */
// Valor inicial do contador
let valor = 0;

// Seleção dos elementos da página
const contadorElemento = document.querySelector("#valor");
const botaoDecremento = document.querySelector("#btn_decremento");
const botaoIncremento = document.querySelector("#btn_incremento");

// Função para atualizar o número na tela
function atualizarContador() {
    contadorElemento.textContent = valor;
}

// Evento de clique para diminuir 1
botaoDecremento.addEventListener("click", () => {
    valor--;
    atualizarContador();
});

// Evento de clique para aumentar 1
botaoIncremento.addEventListener("click", () => {
    valor++;
    atualizarContador();
});

/* ----------------------------------------------------------------------------

lógica pode ser usada para criar um contador de produtos para inserir no carrinho.

---------------------------------------------------------------------------- */
