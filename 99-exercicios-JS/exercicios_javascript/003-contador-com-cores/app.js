/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */
let valor = 0;

const contadorElemento = document.querySelector('#valor');
const botaoDecremento = document.querySelector('#btn_decremento');
const botaoIncremento = document.querySelector('#btn_incremento');

function atualizaContador(){
    contadorElemento.textContent = valor;
    if(valor === 0) contadorElemento.style.color = "white"
    else if(valor > 0) contadorElemento.style.color = "green"
    else contadorElemento.style.color = "red";
}

botaoDecremento.addEventListener('click', () => {
    if (valor === -10)return;
    valor--;
    atualizaContador();
});

botaoIncremento.addEventListener('click', () => {
    if (valor === 10) return;
    valor++;
    atualizaContador();
});

