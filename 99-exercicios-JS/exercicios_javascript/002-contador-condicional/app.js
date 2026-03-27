/* ----------------------------------------------------------------------------

Exercício: 002
Enunciado: CONTADOR COM INTERVALO DE VALORES
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    O valor nunca poderá ser inferior a -10 ou superior a 10.

---------------------------------------------------------------------------- */
let valor = 0;
const contadorElemento = document.querySelector('#valor');
const botaoDecremento = document.querySelector('#btn_decremento');
const botaoIncremento = document.querySelector('#btn_incremento');

botaoDecremento.addEventListener('click', () => {
    if(valor === -10)return;
    contadorElemento.textContent = --valor
})

botaoIncremento.addEventListener('click', () => {
        if(valor === 10)return;
    contadorElemento.textContent = ++valor
})