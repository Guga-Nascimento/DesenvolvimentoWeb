
/* ----------------------------------------------------------------------------
Exercício: 010
Enunciado:
    Existem 4 áreas a cinza.
    Ao clicar numa das áreas a área clicada deve ficar com fundo
    amarelo e as restantes a vermelho.

Versão melhorada para estudo:
- sem Bootstrap
- com feedback visual na tela
- com classes CSS
- com menos repetição
---------------------------------------------------------------------------- */


// ========================================
// SELEÇÃO DOS ELEMENTOS
// ========================================

// Seleciona todas as caixas da página
const caixas = document.querySelectorAll('.box');

// Seleciona o parágrafo onde vamos mostrar a mensagem
const mensagem = document.getElementById('mensagem');


// ========================================
// FUNÇÃO PARA ATUALIZAR O ESTADO DAS CAIXAS
// ========================================

// Esta função recebe a caixa clicada e:
// 1. deixa a clicada amarela
// 2. deixa as outras vermelhas
// 3. atualiza a mensagem na tela
function selecionarCaixa(caixaClicada) {

  // Percorre todas as caixas
  caixas.forEach((caixa) => {

    // Remove os estados anteriores antes de aplicar o novo estado
    caixa.classList.remove('ativa', 'inativa');

    // Se a caixa atual for a mesma que foi clicada
    if (caixa === caixaClicada) {
      caixa.classList.add('ativa');
    } else {
      caixa.classList.add('inativa');
    }
  });

  // Mostra na tela qual caixa foi selecionada
  mensagem.textContent = `${caixaClicada.dataset.nome} foi selecionada. Ela ficou amarela, e as demais ficaram vermelhas.`;
}


// ========================================
// EVENTOS DE CLIQUE
// ========================================

// Adiciona o evento de clique em cada caixa
caixas.forEach((caixa) => {
  caixa.addEventListener('click', () => {
    selecionarCaixa(caixa);
  });
});


// ========================================
// ACESSIBILIDADE COM TECLADO
// ========================================

// Também permite selecionar com Enter ou espaço
caixas.forEach((caixa) => {
  caixa.addEventListener('keydown', (evento) => {

    const teclaEnter = evento.key === 'Enter';
    const teclaEspaco = evento.key === ' ' || evento.key === 'Spacebar';

    if (teclaEnter || teclaEspaco) {
      evento.preventDefault();
      selecionarCaixa(caixa);
    }
  });
});

