// ======================================================
// EXEMPLO 1 - SCRIPT NO FINAL DO BODY
// Aqui o DOM já está carregado, então funciona direto.
// ======================================================

const btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', () => {
    document.querySelector('h1').innerText = 'Alterado pelo script no final do body';
    document.querySelector('#status').innerText = 'Script executado direto (body)';
});


// ======================================================
// EXEMPLO 2 - DOMContentLoaded
// Executa quando o HTML foi totalmente carregado.
// ======================================================

document.addEventListener('DOMContentLoaded', () => {

    const btn1 = document.querySelector('#btn1');

    btn1.addEventListener('click', () => {
        document.querySelector('h1').innerText = 'Alterado com DOMContentLoaded';
        document.querySelector('#status').innerText = 'DOMContentLoaded disparado';
    });

});


// ======================================================
// EXEMPLO 3 - readystatechange
// O document passa por estados:
// loading → interactive → complete
// ======================================================

document.addEventListener('readystatechange', (event) => {

    if (event.target.readyState === 'complete') {

        const btn2 = document.querySelector('#btn2');

        btn2.addEventListener('click', () => {
            document.querySelector('h1').innerText = 'Alterado com readystatechange';
            document.querySelector('#status').innerText = 'Estado complete atingido';
        });

    }
});