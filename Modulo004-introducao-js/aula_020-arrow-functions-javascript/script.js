// =====================================================
// ESTUDO DE ARROW FUNCTIONS
// COM EXPLICAÇÃO NA TELA E SOMA DE VALORES
// =====================================================

// -----------------------------------------------------
// CAPTURA DOS ELEMENTOS DO HTML
// document.getElementById() busca elementos pelo id
// -----------------------------------------------------
const btnConceito = document.getElementById("btn-conceito");
const btnParametros = document.getElementById("btn-parametros");
const btnRetorno = document.getElementById("btn-retorno");
const btnCuidados = document.getElementById("btn-cuidados");
const btnLimpar = document.getElementById("btn-limpar");
const btnSomar = document.getElementById("btn-somar");

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");

const resultado = document.getElementById("resultado");
const infoRecurso = document.getElementById("info-recurso");
const infoFuncao = document.getElementById("info-funcao");
const infoLeitura = document.getElementById("info-leitura");
const infoObservacao = document.getElementById("info-observacao");
const infoCodigo = document.getElementById("info-codigo");

// -----------------------------------------------------
// ARROW FUNCTION AUXILIAR
// Mostra texto na caixa de resultado
// -----------------------------------------------------
const mostrarResultado = (texto) => {
    resultado.innerText = texto;
};

// -----------------------------------------------------
// ARROW FUNCTION AUXILIAR
// Atualiza o painel de explicação
// -----------------------------------------------------
const mostrarExplicacao = (recurso, funcaoRecurso, leitura, observacao, codigo) => {
    infoRecurso.innerText = recurso;
    infoFuncao.innerText = funcaoRecurso;
    infoLeitura.innerText = leitura;
    infoObservacao.innerText = observacao;
    infoCodigo.innerText = codigo;
};

// -----------------------------------------------------
// 1) O QUE É ARROW FUNCTION
// -----------------------------------------------------
const explicarConceito = () => {
    mostrarResultado(
        "Arrow function é uma forma reduzida de escrever funções.\n\n" +
        "Ela é muito usada quando a função é curta e direta."
    );

    mostrarExplicacao(
        "Arrow function",
        "É uma forma mais curta de criar função.",
        "Crie uma função usando => no lugar da sintaxe tradicional.",
        "Ela costuma ser usada em funções pequenas, callbacks e eventos.",
        "const saudacao = () => {\n    console.log('Olá');\n};"
    );
};

// -----------------------------------------------------
// 2) PARÂMETROS
// -----------------------------------------------------
const explicarParametros = () => {
    mostrarResultado(
        "Arrow functions também podem receber parâmetros.\n\n" +
        "Um parâmetro pode vir sem parênteses, mas com dois ou mais eles são obrigatórios."
    );

    mostrarExplicacao(
        "Parâmetros em arrow function",
        "Recebem valores enviados na chamada da função.",
        "O valor entra na função para ser usado no cálculo ou na ação.",
        "Com um parâmetro, os parênteses são opcionais. Com dois ou mais, são obrigatórios.",
        "const dobro = numero => numero * 2;\n\nconst soma = (a, b) => a + b;"
    );
};

// -----------------------------------------------------
// 3) RETORNO IMPLÍCITO
// -----------------------------------------------------
const explicarRetorno = () => {
    mostrarResultado(
        "Quando a arrow function possui apenas uma expressão, você pode escrever sem chaves e sem return.\n\n" +
        "Isso é chamado de retorno implícito."
    );

    mostrarExplicacao(
        "Retorno implícito",
        "A função devolve o valor automaticamente.",
        "Faça a conta e devolva o resultado sem precisar escrever return.",
        "Funciona bem em funções curtas e objetivas.",
        "const somar = (a, b) => a + b;"
    );
};

// -----------------------------------------------------
// 4) CUIDADOS IMPORTANTES
// -----------------------------------------------------
const explicarCuidados = () => {
    mostrarResultado(
        "Cuidados com arrow function:\n\n" +
        "1. Não tem this próprio.\n" +
        "2. Não pode ser usada com new.\n" +
        "3. Não tem arguments próprio.\n" +
        "4. Para retornar objeto literal, use parênteses."
    );

    mostrarExplicacao(
        "Cuidados importantes",
        "Nem sempre arrow function substitui toda função comum.",
        "Use arrow function quando quiser função curta. Evite quando precisar de this próprio.",
        "Ela é excelente para código simples, mas tem diferenças de comportamento.",
        "const criarPessoa = () => ({ nome: 'Gustavo', idade: 37 });"
    );
};

// -----------------------------------------------------
// ARROW FUNCTION QUE REALMENTE FAZ A SOMA
// Recebe dois valores e retorna o resultado
// -----------------------------------------------------
const somar = (a, b) => a + b;

// -----------------------------------------------------
// FUNÇÃO PARA LER E VALIDAR O INPUT
// Number() converte texto para número
// -----------------------------------------------------
const obterNumero = (campo) => Number(campo.value);

// -----------------------------------------------------
// EXEMPLO PRÁTICO COM DADOS DO USUÁRIO
// -----------------------------------------------------
const somarValoresDigitados = () => {
    const valor1 = obterNumero(numero1);
    const valor2 = obterNumero(numero2);

    // Verifica se o usuário deixou campo vazio
    if (numero1.value === "" || numero2.value === "") {
        mostrarResultado(
            "Preencha os dois campos antes de somar."
        );

        mostrarExplicacao(
            "Validação dos campos",
            "Confere se os inputs foram preenchidos antes de executar a soma.",
            "Se faltar valor, pare a execução e avise o usuário.",
            "Validar evita resultado incorreto e melhora a experiência na tela.",
            "if (numero1.value === '' || numero2.value === '') {\n    // avisar o usuário\n}"
        );

        return;
    }

    const total = somar(valor1, valor2);

    mostrarResultado(
        "Resultado da soma\n\n" +
        "Primeiro número: " + valor1 + "\n" +
        "Segundo número: " + valor2 + "\n" +
        "Total retornado pela arrow function: " + total
    );

    mostrarExplicacao(
        "Arrow function com retorno",
        "Recebe dois números e devolve a soma.",
        "Pegue os dois valores enviados e devolva o resultado da soma.",
        "Aqui a função recebe dados do usuário pelos inputs e retorna o valor final.",
        "const somar = (a, b) => a + b;\n\nconst total = somar(valor1, valor2);"
    );
};

// -----------------------------------------------------
// LIMPAR EXPLICAÇÃO
// -----------------------------------------------------
const limparTela = () => {
    mostrarResultado("O resultado vai aparecer aqui.");

    mostrarExplicacao(
        "Nenhum tópico selecionado",
        "Escolha um botão para ver o conteúdo.",
        "Quando clicar em um botão, a tela será atualizada.",
        "Este projeto foi montado para estudar vendo o comportamento no navegador.",
        "btnSomar.addEventListener('click', somarValoresDigitados);"
    );
};

// -----------------------------------------------------
// EVENTOS
// addEventListener() liga um evento a uma função
// -----------------------------------------------------
btnConceito.addEventListener("click", explicarConceito);
btnParametros.addEventListener("click", explicarParametros);
btnRetorno.addEventListener("click", explicarRetorno);
btnCuidados.addEventListener("click", explicarCuidados);
btnSomar.addEventListener("click", somarValoresDigitados);
btnLimpar.addEventListener("click", limparTela);