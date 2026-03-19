// ======================================
// ESTUDO DE onclick
// ======================================

// JavaScript é a linguagem.
// DOM é a estrutura da página no navegador.
// onclick é uma propriedade do elemento usada para reagir a clique.

// ======================================
// 1) ELEMENTOS
// ======================================

const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");
const resetar = document.getElementById("resetar");
const saida = document.getElementById("saida");

// ======================================
// 2) BOTÃO COM onclick INLINE
// ======================================

function alterarTextoInline() {
  titulo.textContent = "Novo texto";
  saida.textContent =
    "O primeiro botão usou onclick no HTML.\n\n" +
    "Leitura humana:\n" +
    'onclick="alterarTextoInline()"\n' +
    "=> quando clicar, execute essa função.";
}

// ======================================
// 3) FUNÇÕES DO SEGUNDO BOTÃO
// ======================================

function funcao1() {
  console.log("clique");
}

function funcao2() {
  titulo.textContent = "Novo texto 1";
  saida.textContent =
    "No segundo botão foi usado onclick via JavaScript.\n\n" +
    "Mas atenção:\n" +
    "botao.onclick = funcao1\n" +
    "botao.onclick = funcao2\n\n" +
    "A segunda atribuição substituiu a primeira.";
}

// ======================================
// 4) EXEMPLO DE SOBRESCRITA
// ======================================

botao.onclick = funcao1;
botao.onclick = funcao2;

// ======================================
// 5) RESET
// ======================================

resetar.onclick = function () {
  titulo.textContent = "Texto original";
  saida.textContent = "Clique em um botão para testar.";
};