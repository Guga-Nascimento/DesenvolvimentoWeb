// =====================================================
// ESTUDO DE FUNÇÕES EM JAVASCRIPT
// COM EXPLICAÇÃO APARECENDO NO NAVEGADOR
// =====================================================

// -----------------------------------------------------
// CAPTURA DOS ELEMENTOS DO HTML
// document.getElementById() procura um elemento pelo id
// -----------------------------------------------------
const resultado = document.getElementById("resultado");

const infoRecurso = document.getElementById("info-recurso");
const infoOrigem = document.getElementById("info-origem");
const infoFuncao = document.getElementById("info-funcao");
const infoLeitura = document.getElementById("info-leitura");
const infoCodigo = document.getElementById("info-codigo");
const infoObservacao = document.getElementById("info-observacao");

const btnExemplo1 = document.getElementById("btn-exemplo1");
const btnExemplo2 = document.getElementById("btn-exemplo2");
const btnExemplo3 = document.getElementById("btn-exemplo3");
const btnExemplo4 = document.getElementById("btn-exemplo4");
const btnAddEventListener = document.getElementById("btn-addEventListener");
const btnGetElementById = document.getElementById("btn-getElementById");
const btnInnerText = document.getElementById("btn-innerText");
const btnLimpar = document.getElementById("btn-limpar");

// -----------------------------------------------------
// FUNÇÃO AUXILIAR
// Atualiza o texto do resultado na tela
// -----------------------------------------------------
function mostrarResultado(texto) {
    resultado.innerText = texto;
}

// -----------------------------------------------------
// FUNÇÃO AUXILIAR
// Atualiza o painel de explicação na tela
// -----------------------------------------------------
function mostrarExplicacao(recurso, origem, funcaoRecurso, leitura, codigo, observacao) {
    infoRecurso.innerText = recurso;
    infoOrigem.innerText = origem;
    infoFuncao.innerText = funcaoRecurso;
    infoLeitura.innerText = leitura;
    infoCodigo.innerText = codigo;
    infoObservacao.innerText = observacao;
}

// -----------------------------------------------------
// EXEMPLO 1 - FUNÇÃO SIMPLES
// -----------------------------------------------------
function escreverMensagem() {
    mostrarResultado(
        "Exemplo 1 - Função simples\n\n" +
        "A função escreverMensagem() foi executada com sucesso.\n" +
        "Ela não recebeu nenhum valor e apenas realizou uma ação."
    );

    mostrarExplicacao(
        "function escreverMensagem()",
        "JavaScript puro",
        "Cria uma função com nome. A função pode ser chamada depois para executar uma tarefa.",
        "Quando eu chamar escreverMensagem(), esse bloco será executado.",
        "function escreverMensagem() {\n    mostrarResultado('Texto aqui');\n}",
        "Esse é o modelo mais básico para começar a estudar funções. Primeiro você cria a função; depois, em outro ponto do código, você chama essa função."
    );
}

// -----------------------------------------------------
// EXEMPLO 2 - FUNÇÃO COM PARÂMETRO
// -----------------------------------------------------
function escreverMensagemPersonalizada(mensagem) {
    mostrarResultado(
        "Exemplo 2 - Função com parâmetro\n\n" +
        "Mensagem recebida: " + mensagem + "\n\n" +
        "O parâmetro permite enviar um valor para dentro da função."
    );

    mostrarExplicacao(
        "Parâmetro: mensagem",
        "JavaScript puro",
        "O parâmetro é uma variável criada na assinatura da função para receber um valor quando ela for chamada.",
        "Quando eu chamar a função enviando um texto, esse texto vai entrar na variável mensagem.",
        "function escreverMensagemPersonalizada(mensagem) {\n    mostrarResultado(mensagem);\n}",
        "Parâmetro é o nome que aparece na criação da função. O valor enviado na chamada é o argumento."
    );
}

// -----------------------------------------------------
// EXEMPLO 3 - FUNÇÃO COM RETORNO
// -----------------------------------------------------
function adicionar(a, b) {
    return a + b;
}

function executarSoma() {
    const valor1 = 10;
    const valor2 = 20;
    const soma = adicionar(valor1, valor2);

    mostrarResultado(
        "Exemplo 3 - Função com retorno\n\n" +
        "Valor 1: " + valor1 + "\n" +
        "Valor 2: " + valor2 + "\n" +
        "Resultado da soma: " + soma + "\n\n" +
        "A função usou return para devolver o resultado."
    );

    mostrarExplicacao(
        "return",
        "JavaScript puro",
        "Devolve um valor para fora da função. Esse valor pode ser guardado em uma variável, exibido ou usado em outro cálculo.",
        "A função faz a conta e devolve o resultado para quem chamou.",
        "function adicionar(a, b) {\n    return a + b;\n}",
        "Sem return, a função apenas executa algo. Com return, ela passa a produzir um resultado reaproveitável."
    );
}

// -----------------------------------------------------
// EXEMPLO 4 - FUNÇÃO COM VALOR PADRÃO
// -----------------------------------------------------
function saudacao(periodo = "dia") {
    return "Bom " + periodo + "!";
}

function executarSaudacao() {
    const mensagemPadrao = saudacao();
    const mensagemPersonalizada = saudacao("noite");

    mostrarResultado(
        "Exemplo 4 - Valor padrão\n\n" +
        "saudacao(): " + mensagemPadrao + "\n" +
        "saudacao('noite'): " + mensagemPersonalizada + "\n\n" +
        "Quando nenhum valor é enviado, a função usa o valor padrão."
    );

    mostrarExplicacao(
        "Parâmetro com valor padrão",
        "JavaScript puro",
        "Define um valor automático para o parâmetro caso nada seja enviado na chamada da função.",
        "Se eu não informar nada, a função usa o valor que já foi definido como padrão.",
        "function saudacao(periodo = 'dia') {\n    return 'Bom ' + periodo + '!';\n}",
        "Isso evita erros e deixa a função mais flexível. É muito útil quando um argumento pode ou não ser informado."
    );
}

// -----------------------------------------------------
// EXPLICAÇÃO - addEventListener()
// -----------------------------------------------------
function explicarAddEventListener() {
    mostrarResultado(
        "Explicação de addEventListener()\n\n" +
        "Esse método serve para ouvir eventos no navegador.\n" +
        "Exemplo: clique, teclado, mouse, envio de formulário etc."
    );

    mostrarExplicacao(
        "addEventListener()",
        "Método do navegador / DOM",
        "Adiciona um ouvinte de evento em um elemento HTML. Quando o evento acontece, a função indicada é executada.",
        "Quando acontecer tal evento neste elemento, execute esta função.",
        "botao.addEventListener('click', escreverMensagem);",
        "No exemplo acima, o navegador fica escutando o clique no botão. Quando o clique acontece, ele chama a função escreverMensagem."
    );
}

// -----------------------------------------------------
// EXPLICAÇÃO - getElementById()
// -----------------------------------------------------
function explicarGetElementById() {
    mostrarResultado(
        "Explicação de getElementById()\n\n" +
        "Esse método procura um elemento do HTML pelo valor do id."
    );

    mostrarExplicacao(
        "document.getElementById()",
        "Método do objeto document / navegador",
        "Busca no HTML um elemento que tenha o id informado.",
        "Procure na página o elemento que tem este id e me devolva esse elemento.",
        "const resultado = document.getElementById('resultado');",
        "Depois que o elemento é encontrado, você pode alterar texto, estilos, classes e outras propriedades dele."
    );
}

// -----------------------------------------------------
// EXPLICAÇÃO - innerText
// -----------------------------------------------------
function explicarInnerText() {
    mostrarResultado(
        "Explicação de innerText\n\n" +
        "Essa propriedade altera ou lê o texto visível de um elemento HTML."
    );

    mostrarExplicacao(
        "innerText",
        "Propriedade de elemento HTML / navegador",
        "Permite colocar texto dentro de um elemento ou ler o texto que já está visível.",
        "Troque o texto que aparece dentro deste elemento.",
        "resultado.innerText = 'Olá, mundo!';",
        "É uma forma simples e segura de mostrar mensagens na tela sem precisar mexer em tags HTML."
    );
}

// -----------------------------------------------------
// LIMPAR TELA
// -----------------------------------------------------
function limparTela() {
    mostrarResultado("Clique em um botão para ver o resultado.");

    mostrarExplicacao(
        "Nenhum item selecionado",
        "Aguardando ação do usuário",
        "Escolha um botão para ver a explicação correspondente.",
        "Quando eu clicar em um botão, a tela será atualizada.",
        "btnExemplo1.addEventListener('click', escreverMensagem);",
        "Esse projeto foi montado para estudar vendo o resultado diretamente no navegador."
    );
}

// -----------------------------------------------------
// EVENTOS DOS BOTÕES
// addEventListener() liga um evento a uma função
// -----------------------------------------------------
btnExemplo1.addEventListener("click", escreverMensagem);

btnExemplo2.addEventListener("click", function () {
    escreverMensagemPersonalizada("Olá! Esta frase foi enviada para a função.");
});

btnExemplo3.addEventListener("click", executarSoma);
btnExemplo4.addEventListener("click", executarSaudacao);

btnAddEventListener.addEventListener("click", explicarAddEventListener);
btnGetElementById.addEventListener("click", explicarGetElementById);
btnInnerText.addEventListener("click", explicarInnerText);

btnLimpar.addEventListener("click", limparTela);