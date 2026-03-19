/*
OBJETIVO:
Apresentar 25 caixas em coluna
com gradação das cores vermelho, verde ou azul
usando variação RGB de 0 até 250, de 10 em 10.
*/


// =====================================================
// 1) Seleção dos elementos da página
// =====================================================
// Aqui usamos o DOM para pegar os botões, a área das caixas
// e os textos que serão atualizados na tela.

const botaoVermelho = document.querySelector('#btn_vermelho');
const botaoVerde = document.querySelector('#btn_verde');
const botaoAzul = document.querySelector('#btn_azul');
const areaCaixas = document.querySelector('#area_caixas');
const tituloCor = document.querySelector('#titulo_cor');
const mensagem = document.querySelector('#mensagem');

console.log('✅ script.js carregado com sucesso');
console.log('botaoVermelho:', botaoVermelho);
console.log('botaoVerde:', botaoVerde);
console.log('botaoAzul:', botaoAzul);
console.log('areaCaixas:', areaCaixas);


// =====================================================
// 2) Função para limpar as caixas antigas
// =====================================================
// Antes de gerar uma nova paleta, apagamos a anterior.

function limparCaixas() {
  console.log('🧹 Limpando caixas antigas');
  areaCaixas.innerHTML = '';
}


// =====================================================
// 3) Função para criar uma caixa
// =====================================================
// Esta função recebe a cor já pronta e cria uma div.

function criarCaixa(corRgb) {
  const caixa = document.createElement('div');
  caixa.classList.add('caixa');
  caixa.style.backgroundColor = corRgb;
  areaCaixas.appendChild(caixa);
}


// =====================================================
// 4) Função principal para gerar a paleta
// =====================================================
// Recebe o nome da cor e monta as 25 caixas.

function gerarPaleta(tipoCor) {
  console.log(`🎨 Gerando paleta da cor: ${tipoCor}`);

  limparCaixas();

  tituloCor.textContent = `Cor selecionada: ${tipoCor}`;
  mensagem.textContent = 'Paleta gerada com 25 níveis de intensidade.';

  for (let i = 0; i <= 250; i += 10) {
    let corRgb = '';

    if (tipoCor === 'Vermelho') {
      corRgb = `rgb(${i}, 0, 0)`;
    }

    if (tipoCor === 'Verde') {
      corRgb = `rgb(0, ${i}, 0)`;
    }

    if (tipoCor === 'Azul') {
      corRgb = `rgb(0, 0, ${i})`;
    }

    console.log(`Faixa criada: ${corRgb}`);
    criarCaixa(corRgb);
  }
}


// =====================================================
// 5) Eventos de clique dos botões
// =====================================================
// Cada botão chama a mesma função, mudando apenas a cor.

botaoVermelho.addEventListener('click', () => {
  console.log('🟥 Clique no botão vermelho');
  gerarPaleta('Vermelho');
});

botaoVerde.addEventListener('click', () => {
  console.log('🟩 Clique no botão verde');
  gerarPaleta('Verde');
});

botaoAzul.addEventListener('click', () => {
  console.log('🟦 Clique no botão azul');
  gerarPaleta('Azul');
});