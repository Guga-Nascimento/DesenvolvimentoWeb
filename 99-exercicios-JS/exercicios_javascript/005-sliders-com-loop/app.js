/* ----------------------------------------------------------------------------

Exercício: 005
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES - VERSÃO CÓDIGO REDUZIDO
    
    O exercício anterior, mas com quantidade de código JS reduzida.

---------------------------------------------------------------------------- */
for (let r = 1; r <= 3; r++) {
    const slider = document.querySelector('#range_' + r);
    const valorExibido = document.querySelector('#value_' + r);

    slider.min = 0;
    slider.max = 100;
    slider.value = 0;

    slider.addEventListener('input', (event) => {
        valorExibido.textContent = event.target.value;
    });
}