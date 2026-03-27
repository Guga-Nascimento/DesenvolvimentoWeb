/* ============================================================================
   PROJETO: Painel de Sliders Interativos
   OBJETIVO:
   - Trabalhar DOM com sliders independentes
   - Atualizar valores em tempo real
   - Exibir status visual e percentual
   - Calcular resumo geral automaticamente
   ============================================================================ */

/* ---------------------------------------------------------------------------
   1) ESTRUTURA DOS DADOS
   Aqui criamos um array com a configuração de cada slider.
   Isso evita repetir código 3 vezes.
--------------------------------------------------------------------------- */
const slidersConfig = [
    {
        rangeId: "#range_1",
        valueId: "#value_1",
        statusId: "#status_1",
        percentualId: "#percentual_1"
    },
    {
        rangeId: "#range_2",
        valueId: "#value_2",
        statusId: "#status_2",
        percentualId: "#percentual_2"
    },
    {
        rangeId: "#range_3",
        valueId: "#value_3",
        statusId: "#status_3",
        percentualId: "#percentual_3"
    }
];

/* ---------------------------------------------------------------------------
   2) SELEÇÃO DOS ELEMENTOS DO RESUMO
   Estes elementos ficam no topo mostrando média, maior e menor valor.
--------------------------------------------------------------------------- */
const mediaGeralElemento = document.querySelector("#mediaGeral");
const maiorValorElemento = document.querySelector("#maiorValor");
const menorValorElemento = document.querySelector("#menorValor");

const botaoReset = document.querySelector("#btnReset");
const botaoSortear = document.querySelector("#btnSortear");

/* ---------------------------------------------------------------------------
   3) FUNÇÃO AUXILIAR PARA DEFINIR O STATUS
   Aqui transformamos número em uma leitura mais humana.
   Exemplo:
   - de 0 a 33   => Baixo
   - de 34 a 66  => Médio
   - de 67 a 100 => Alto
--------------------------------------------------------------------------- */
function obterStatus(valor) {
    if (valor <= 33) return "Baixo";
    if (valor <= 66) return "Médio";
    return "Alto";
}

/* ---------------------------------------------------------------------------
   4) FUNÇÃO QUE ATUALIZA UM SLIDER ESPECÍFICO
   Ela:
   - mostra o valor na tela
   - mostra o percentual
   - mostra o status textual
   - atualiza o fundo visual do slider
--------------------------------------------------------------------------- */
function atualizarSlider(slider) {
    const valorAtual = Number(slider.range.value);

    slider.value.textContent = valorAtual;
    slider.percentual.textContent = `${valorAtual}%`;
    slider.status.textContent = obterStatus(valorAtual);

    /* Atualiza uma variável CSS para colorir a barra até o ponto atual */
    slider.range.style.setProperty("--progress", `${valorAtual}%`);
}

/* ---------------------------------------------------------------------------
   5) FUNÇÃO QUE ATUALIZA O RESUMO GERAL
   Ela pega todos os valores atuais e calcula:
   - média
   - maior valor
   - menor valor
--------------------------------------------------------------------------- */
function atualizarResumo(sliders) {
    const valores = sliders.map((slider) => Number(slider.range.value));

    const soma = valores.reduce((acumulador, valor) => acumulador + valor, 0);
    const media = Math.round(soma / valores.length);
    const maior = Math.max(...valores);
    const menor = Math.min(...valores);

    mediaGeralElemento.textContent = media;
    maiorValorElemento.textContent = maior;
    menorValorElemento.textContent = menor;
}

/* ---------------------------------------------------------------------------
   6) FUNÇÃO QUE CONFIGURA TODOS OS SLIDERS
   Aqui transformamos a configuração simples em objetos completos com:
   - range
   - value
   - status
   - percentual
--------------------------------------------------------------------------- */
function criarSliders() {
    return slidersConfig.map((config) => {
        const range = document.querySelector(config.rangeId);
        const value = document.querySelector(config.valueId);
        const status = document.querySelector(config.statusId);
        const percentual = document.querySelector(config.percentualId);

        /* Definimos as propriedades do range via JavaScript */
        range.min = 0;
        range.max = 100;
        range.value = 0;

        return { range, value, status, percentual };
    });
}

/* ---------------------------------------------------------------------------
   7) FUNÇÃO PARA ATUALIZAR TODA A INTERFACE
   Em vez de sair atualizando pedaço por pedaço em vários lugares,
   criamos um fluxo centralizado.
--------------------------------------------------------------------------- */
function atualizarInterface(sliders) {
    sliders.forEach((slider) => atualizarSlider(slider));
    atualizarResumo(sliders);
}

/* ---------------------------------------------------------------------------
   8) INICIALIZAÇÃO
   Criamos os sliders e já desenhamos a interface inicial.
--------------------------------------------------------------------------- */
const sliders = criarSliders();
atualizarInterface(sliders);

/* ---------------------------------------------------------------------------
   9) EVENTOS DOS SLIDERS
   Sempre que um slider mudar:
   - atualiza aquele card
   - atualiza o resumo geral
--------------------------------------------------------------------------- */
sliders.forEach((slider) => {
    slider.range.addEventListener("input", () => {
        atualizarSlider(slider);
        atualizarResumo(sliders);
    });
});

/* ---------------------------------------------------------------------------
   10) BOTÃO RESETAR
   Coloca todos os sliders novamente em 0.
--------------------------------------------------------------------------- */
botaoReset.addEventListener("click", () => {
    sliders.forEach((slider) => {
        slider.range.value = 0;
    });

    atualizarInterface(sliders);
});

/* ---------------------------------------------------------------------------
   11) BOTÃO SORTEAR
   Gera valores aleatórios entre 0 e 100 para os 3 sliders.
   Isso é útil para testar a interface mais rápido.
--------------------------------------------------------------------------- */
botaoSortear.addEventListener("click", () => {
    sliders.forEach((slider) => {
        const numeroAleatorio = Math.floor(Math.random() * 101);
        slider.range.value = numeroAleatorio;
    });

    atualizarInterface(sliders);
});