/* ============================================================================
   PROJETO: ABAS INTERATIVAS MODERNAS
   OBJETIVO:
   - Mostrar uma área por vez
   - Destacar o botão ativo
   - Atualizar informações visuais do painel
   - Permitir navegação por clique e teclado
   ============================================================================ */

/* ---------------------------------------------------------------------------
   1) SELEÇÃO DOS ELEMENTOS PRINCIPAIS
   Aqui pegamos os botões das abas, as áreas de conteúdo e os elementos do painel.
--------------------------------------------------------------------------- */
const botoes = document.querySelectorAll(".tab-btn");
const paineis = document.querySelectorAll(".caixa-informacao");
const abaAtualElemento = document.querySelector("#abaAtual");
const contadorAbasElemento = document.querySelector("#contadorAbas");
const btnAnterior = document.querySelector("#btnAnterior");
const btnProxima = document.querySelector("#btnProxima");

/* ---------------------------------------------------------------------------
   2) ESTADO DA INTERFACE
   Esta variável guarda qual aba está atualmente ativa.
--------------------------------------------------------------------------- */
let abaAtual = 1;

/* ---------------------------------------------------------------------------
   3) FUNÇÃO PARA ESCONDER TODOS OS PAINÉIS
   Ela remove a classe active de todas as caixas de informação.
--------------------------------------------------------------------------- */
function esconderTodosOsPaineis() {
    paineis.forEach((painel) => {
        painel.classList.remove("active");
    });
}

/* ---------------------------------------------------------------------------
   4) FUNÇÃO PARA REMOVER O ESTADO ATIVO DE TODOS OS BOTÕES
--------------------------------------------------------------------------- */
function desativarTodosOsBotoes() {
    botoes.forEach((botao) => {
        botao.classList.remove("active");
    });
}

/* ---------------------------------------------------------------------------
   5) FUNÇÃO PRINCIPAL DE EXIBIÇÃO
   Esta função:
   - atualiza a aba atual
   - esconde todos os painéis
   - desativa todos os botões
   - mostra apenas o painel correspondente
   - ativa apenas o botão correspondente
   - atualiza o painel superior com nome e posição
--------------------------------------------------------------------------- */
function mostrarAba(numeroDaAba) {
    abaAtual = numeroDaAba;

    esconderTodosOsPaineis();
    desativarTodosOsBotoes();

    const painelAtivo = document.querySelector("#info" + numeroDaAba);
    const botaoAtivo = document.querySelector("#tab" + numeroDaAba);

    painelAtivo.classList.add("active");
    botaoAtivo.classList.add("active");

    abaAtualElemento.textContent = botaoAtivo.textContent;
    contadorAbasElemento.textContent = `${numeroDaAba} de ${botoes.length}`;
}

/* ---------------------------------------------------------------------------
   6) EVENTO DE CLIQUE NOS BOTÕES DAS ABAS
   Cada botão possui o atributo data-tab indicando qual conteúdo deve abrir.
--------------------------------------------------------------------------- */
botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const numeroDaAba = Number(botao.dataset.tab);
        mostrarAba(numeroDaAba);
    });
});

/* ---------------------------------------------------------------------------
   7) BOTÃO "ANTERIOR"
   Se estiver na primeira aba, volta para a última.
   Isso cria navegação circular.
--------------------------------------------------------------------------- */
btnAnterior.addEventListener("click", () => {
    const abaAnterior = abaAtual === 1 ? botoes.length : abaAtual - 1;
    mostrarAba(abaAnterior);
});

/* ---------------------------------------------------------------------------
   8) BOTÃO "PRÓXIMA"
   Se estiver na última aba, volta para a primeira.
--------------------------------------------------------------------------- */
btnProxima.addEventListener("click", () => {
    const proximaAba = abaAtual === botoes.length ? 1 : abaAtual + 1;
    mostrarAba(proximaAba);
});

/* ---------------------------------------------------------------------------
   9) NAVEGAÇÃO PELO TECLADO
   Seta para a direita -> próxima aba
   Seta para a esquerda -> aba anterior
--------------------------------------------------------------------------- */
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        const proximaAba = abaAtual === botoes.length ? 1 : abaAtual + 1;
        mostrarAba(proximaAba);
    }

    if (event.key === "ArrowLeft") {
        const abaAnterior = abaAtual === 1 ? botoes.length : abaAtual - 1;
        mostrarAba(abaAnterior);
    }
});

/* ---------------------------------------------------------------------------
   10) INICIALIZAÇÃO
   Começamos com a aba 1 ativa por padrão.
--------------------------------------------------------------------------- */
mostrarAba(1);