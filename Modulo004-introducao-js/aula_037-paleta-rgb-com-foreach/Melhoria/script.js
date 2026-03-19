/*
OBJETIVO:
Apresentar 25 caixas em coluna
com gradação de cores vermelho, verde ou azul
com variação do RGB de 0 até 250, de 10 em 10.
*/


// =====================================================
// 1) Seleção dos elementos da página
// =====================================================
// Aqui pegamos os botões, a área onde as caixas vão aparecer
// e os textos informativos da tela.

const botoes = document.querySelectorAll('button');
const areaCaixas = document.querySelector('#area-caixas');
const tituloCor = document.querySelector('#titulo-cor');
const mensagem = document.querySelector('#mensagem');

console.log('✅ script.js carregado');
console.log('botoes:', botoes);
console.log('areaCaixas:', areaCaixas);


// =====================================================
// 2) Função para limpar as caixas antigas
// =====================================================
// Remove todas as caixas antes de gerar uma nova paleta.

function limparCaixas() {
  console.log('🧹 Limpando caixas antigas');
  areaCaixas.innerHTML = '';
}


// =====================================================
// 3) Função para descobrir a cor com base no id do botão
// =====================================================
// Recebe o id clicado e devolve o nome da cor.

function descobrirCor(idBotao) {
  if (idBotao === 'btn_vermelho') {
    return 'Vermelho';
  }

  if (idBotao === 'btn_verde') {
    return 'Verde';
  }

  return 'Azul';
}


// =====================================================
// 4) Função para montar a cor RGB
// =====================================================
// Recebe o nome da cor e o valor da intensidade.

function montarCorRgb(cor, valor) {
  if (cor === 'Vermelho') {
    return `rgb(${valor}, 0, 0)`;
  }

  if (cor === 'Verde') {
    return `rgb(0, ${valor}, 0)`;
  }

  return `rgb(0, 0, ${valor})`;
}


// =====================================================
// 5) Função para criar uma caixa
// =====================================================
// Cria uma div, aplica a classe e a cor de fundo.

function criarCaixa(corRgb) {
  const caixa = document.createElement('div');
  caixa.classList.add('caixa');
  caixa.style.backgroundColor = corRgb;
  areaCaixas.appendChild(caixa);
}


// =====================================================
// 6) Evento de clique para todos os botões
// =====================================================
// Aqui usamos forEach para adicionar evento em cada botão.
// Isso evita repetir addEventListener 3 vezes.

botoes.forEach((botao) => {
  botao.addEventListener('click', (event) => {
    console.log('🖱️ Botão clicado:', event.target.id);

    limparCaixas();

    const corSelecionada = descobrirCor(event.target.id);

    tituloCor.textContent = `Cor selecionada: ${corSelecionada}`;
    mensagem.textContent = 'Paleta gerada com 25 níveis de intensidade.';

    for (let i = 0; i <= 250; i += 10) {
      const corRgb = montarCorRgb(corSelecionada, i);
      console.log('Faixa criada:', corRgb);
      criarCaixa(corRgb);
    }
  });
});