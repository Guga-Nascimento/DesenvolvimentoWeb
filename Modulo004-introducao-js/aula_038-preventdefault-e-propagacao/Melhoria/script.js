// ======================================================
// SELEÇÃO DOS ELEMENTOS DA PÁGINA
// Aqui pegamos os elementos que vamos usar no estudo.
// ======================================================

const link = document.querySelector('.link-estudo');
const formulario = document.querySelector('.formulario');
const caixa = document.querySelector('.caixa');
const mensagem = document.querySelector('#mensagem');


// ======================================================
// FUNÇÃO AUXILIAR PARA ESCREVER NA TELA
// Em vez de deixar tudo só no console, vamos mostrar
// o que aconteceu dentro da página.
// ======================================================

function mostrarMensagem(texto) {
  mensagem.textContent = texto;
}


// ======================================================
// EVENTO DO LINK
// O link normalmente abriria outra página.
// preventDefault() impede essa ação padrão.
// ======================================================

link.addEventListener('click', (event) => {
  event.preventDefault();

  console.log('Clique no link');
  console.log(event);

  mostrarMensagem('Você clicou no link, mas o preventDefault() impediu a navegação padrão.');
});


// ======================================================
// EVENTO DO FORMULÁRIO
// O mais correto aqui é ouvir o submit do formulário,
// não apenas o clique no botão.
// Isso funciona mesmo se o envio acontecer por Enter.
// ======================================================

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('Tentativa de envio do formulário');
  console.log(event);

  mostrarMensagem('O formulário tentou enviar, mas o preventDefault() impediu o envio.');
});


// ======================================================
// EVENTO DA CAIXA
// Esse evento serve para mostrar que a div também pode
// receber clique. Se clicar dentro dela, o evento sobe,
// a menos que alguém use stopPropagation().
// ======================================================

caixa.addEventListener('click', () => {
  console.log('Clique detectado na div .caixa');
});