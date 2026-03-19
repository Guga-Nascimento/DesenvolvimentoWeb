// =====================================================
// ESCOPO DE VARIÁVEIS EM JAVASCRIPT
// COM EXPLICAÇÃO APARECENDO NO NAVEGADOR
// =====================================================

// -----------------------------------------------------
// CAPTURA DOS ELEMENTOS DO HTML
// document.getElementById() procura um elemento pelo id
// -----------------------------------------------------
const resultado = document.getElementById("resultado");

const infoConceito = document.getElementById("info-conceito");
const infoFuncao = document.getElementById("info-funcao");
const infoLeitura = document.getElementById("info-leitura");
const infoObservacao = document.getElementById("info-observacao");
const infoCodigo = document.getElementById("info-codigo");

const btnGlobal = document.getElementById("btn-global");
const btnLocal = document.getElementById("btn-local");
const btnSombra = document.getElementById("btn-sombra");
const btnBloco = document.getElementById("btn-bloco");
const btnVarLet = document.getElementById("btn-var-let");
const btnLimpar = document.getElementById("btn-limpar");

// -----------------------------------------------------
// FUNÇÃO AUXILIAR
// Mostra o resultado principal na tela
// -----------------------------------------------------
function mostrarResultado(texto) {
    resultado.innerText = texto;
}

// -----------------------------------------------------
// FUNÇÃO AUXILIAR
// Atualiza a explicação na tela
// -----------------------------------------------------
function mostrarExplicacao(conceito, funcaoDoExemplo, leitura, observacao, codigo) {
    infoConceito.innerText = conceito;
    infoFuncao.innerText = funcaoDoExemplo;
    infoLeitura.innerText = leitura;
    infoObservacao.innerText = observacao;
    infoCodigo.innerText = codigo;
}

// -----------------------------------------------------
// EXEMPLO 1 - ESCOPO GLOBAL
// Variável criada fora da função pode ser acessada dentro
// -----------------------------------------------------
function exemploGlobal() {
    let valor = 10;

    function escrever() {
        return "Função lendo valor global: " + valor;
    }

    mostrarResultado(
        "Exemplo: escopo global\n\n" +
        escrever() + "\n" +
        "Código fora da função também lê: " + valor
    );

    mostrarExplicacao(
        "Escopo global",
        "Uma variável criada fora da função pode ser usada em vários pontos do código, inclusive dentro da função.",
        "A variável nasce fora, então a função consegue enxergá-la.",
        "Global não significa 'sempre bom'. Variável global demais pode bagunçar o projeto.",
        "let valor = 10;\n\nfunction escrever() {\n    console.log(valor);\n}"
    );
}

// -----------------------------------------------------
// EXEMPLO 2 - ESCOPO LOCAL
// Variável criada dentro da função só existe ali
// -----------------------------------------------------
function exemploLocal() {
    function escrever() {
        let mensagem = "Eu existo somente dentro da função.";
        return mensagem;
    }

    mostrarResultado(
        "Exemplo: escopo local\n\n" +
        escrever() + "\n\n" +
        "Fora da função, a variável 'mensagem' não pode ser usada."
    );

    mostrarExplicacao(
        "Escopo local",
        "Uma variável criada dentro da função só pode ser usada dentro dessa própria função.",
        "A variável nasce dentro da função e morre quando sai dela.",
        "Se tentar usar essa variável fora da função, ocorrerá erro.",
        "function escrever() {\n    let mensagem = 'Texto';\n    console.log(mensagem);\n}"
    );
}

// -----------------------------------------------------
// EXEMPLO 3 - SOMBRA DE VARIÁVEL
// Uma variável local com o mesmo nome da global
// -----------------------------------------------------
function exemploSombra() {
    let valor = 10;

    function escrever() {
        let valor = 100;
        return "Dentro da função: " + valor;
    }

    mostrarResultado(
        "Exemplo: sombra de variável\n\n" +
        escrever() + "\n" +
        "Fora da função: " + valor
    );

    mostrarExplicacao(
        "Sombra de variável",
        "Quando uma variável local tem o mesmo nome da variável global, a local passa a valer dentro da função.",
        "Dentro da função, use a variável mais próxima.",
        "A variável local não apaga a global. Ela apenas ocupa o lugar dela naquele escopo.",
        "let valor = 10;\n\nfunction escrever() {\n    let valor = 100;\n    console.log(valor);\n}\n\nconsole.log(valor);"
    );
}

// -----------------------------------------------------
// EXEMPLO 4 - ESCOPO DE BLOCO
// let e const respeitam bloco: if, for, {}
// -----------------------------------------------------
function exemploBloco() {
    let textoFinal = "";

    if (true) {
        let dentroDoIf = "Eu existo apenas dentro do bloco if.";
        textoFinal += dentroDoIf;
    }

    textoFinal += "\n\nFora do bloco if, a variável 'dentroDoIf' não existe mais.";

    mostrarResultado(
        "Exemplo: escopo de bloco\n\n" + textoFinal
    );

    mostrarExplicacao(
        "Escopo de bloco",
        "Variáveis criadas com let e const dentro de um bloco só existem naquele bloco.",
        "Se nasceu dentro das chaves, só funciona dentro das chaves.",
        "Bloco pode ser if, for, while ou até um par de chaves isolado.",
        "if (true) {\n    let dentroDoIf = 'Texto';\n    console.log(dentroDoIf);\n}\n\n// aqui fora não funciona"
    );
}

// -----------------------------------------------------
// EXEMPLO 5 - var x let
// var ignora bloco, let respeita bloco
// -----------------------------------------------------
function exemploVarLet() {
    let texto = "";

    for (let i = 1; i <= 3; i++) {
        texto += "let i dentro do for: " + i + "\n";
    }

    texto += "\nFora do for, 'i' não existe porque foi criada com let.\n\n";

    for (var j = 1; j <= 3; j++) {
        texto += "var j dentro do for: " + j + "\n";
    }

    texto += "\nFora do for, 'j' ainda existe e vale: " + j;

    mostrarResultado(
        "Exemplo: var x let\n\n" + texto
    );

    mostrarExplicacao(
        "Diferença entre var e let",
        "let respeita o bloco. var não respeita bloco e pode continuar visível fora dele.",
        "Com let, a variável fica presa ao for. Com var, ela vaza para fora.",
        "Hoje, em regra, prefira let e const. var é mais antigo e costuma gerar mais confusão.",
        "for (let i = 1; i <= 3; i++) {\n    console.log(i);\n}\n\nfor (var j = 1; j <= 3; j++) {\n    console.log(j);\n}\n\nconsole.log(j);"
    );
}

// -----------------------------------------------------
// LIMPAR TELA
// -----------------------------------------------------
function limparTela() {
    mostrarResultado("Clique em um botão para ver o exemplo.");

    mostrarExplicacao(
        "Nenhum exemplo selecionado",
        "Escolha um dos botões para estudar escopo.",
        "Quando você clicar, a tela vai mostrar o comportamento da variável.",
        "Escopo é o lugar onde a variável existe e pode ser acessada.",
        "btnGlobal.addEventListener('click', exemploGlobal);"
    );
}

// -----------------------------------------------------
// EVENTOS
// addEventListener() escuta um evento e chama a função
// -----------------------------------------------------
btnGlobal.addEventListener("click", exemploGlobal);
btnLocal.addEventListener("click", exemploLocal);
btnSombra.addEventListener("click", exemploSombra);
btnBloco.addEventListener("click", exemploBloco);
btnVarLet.addEventListener("click", exemploVarLet);
btnLimpar.addEventListener("click", limparTela);