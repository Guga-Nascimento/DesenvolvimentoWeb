/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    O mesmo exercício do vídeo anterior, mas com código mais sintético.
---------------------------------------------------------------------------- */
const infos = document.querySelectorAll('[id^="info"]');

document.querySelectorAll('[id^="tab"]').forEach((botao) => botao.addEventListener('click', (event) => {
    infos.forEach((info) => info.classList.add('d-none'));
    document.querySelector('#info' + event.target.id.substring(3)).classList.remove('d-none');
}));

infos.forEach((info) => info.classList.add('d-none'));
document.querySelector('#info1').classList.remove('d-none');