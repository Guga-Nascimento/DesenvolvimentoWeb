// =====================================
// CICLOS - LOOPS - ITERAÇÕES
// =====================================
//
// Este arquivo mostra os principais loops do JavaScript
// de forma visual no navegador.
//
// Conteúdos:
// - while
// - do...while
// - for
// - for...in
// - for...of
// - forEach
// =====================================


// -------------------------------------
// DADOS USADOS NOS EXEMPLOS
// -------------------------------------
const numeros = [1, 2, 3, 4, 5];
const nomes = ["joao", "ana", "carlos"];


// -------------------------------------
// PEGANDO ELEMENTOS DO HTML
// -------------------------------------
// document.getElementById("id-do-elemento")
// Procura um elemento no HTML pelo id e devolve esse elemento
const dadosBase = document.getElementById("dadosBase");
const resultado = document.getElementById("resultado");

const btnWhile = document.getElementById("btnWhile");
const btnDoWhile = document.getElementById("btnDoWhile");
const btnFor = document.getElementById("btnFor");
const btnForIn = document.getElementById("btnForIn");
const btnForOf = document.getElementById("btnForOf");
const btnForEach = document.getElementById("btnForEach");
const btnLimpar = document.getElementById("btnLimpar");


// -------------------------------------
// MOSTRAR OS DADOS INICIAIS NA TELA
// -------------------------------------
// JSON.stringify() transforma array em texto
// para aparecer de forma organizada no navegador
function mostrarDadosBase() {
    dadosBase.textContent =
        "Números: " + JSON.stringify(numeros) +
        " | Nomes: " + JSON.stringify(nomes);
}


// -------------------------------------
// WHILE
// -------------------------------------
// while executa enquanto a condição for verdadeira
btnWhile.addEventListener("click", function () {
    let valor = 0;
    let saida = "Exemplo com while:\n";

    while (valor < 5) {
        saida += "Valor atual: " + valor + "\n";
        valor++;
    }

    resultado.textContent = saida;
});


// -------------------------------------
// DO...WHILE
// -------------------------------------
// O do...while executa primeiro e só depois testa a condição
btnDoWhile.addEventListener("click", function () {
    let valor = 0;
    let saida = "Exemplo com do...while:\n";

    do {
        saida += "Valor atual: " + valor + "\n";
        valor++;
    } while (valor < 5);

    resultado.textContent = saida;
});


// -------------------------------------
// FOR
// -------------------------------------
// O for já reúne:
// 1. início
// 2. condição
// 3. incremento
btnFor.addEventListener("click", function () {
    let saida = "Exemplo com for:\n";

    for (let valor = 0; valor < 5; valor++) {
        saida += "Valor atual: " + valor + "\n";
    }

    resultado.textContent = saida;
});


// -------------------------------------
// FOR...IN
// -------------------------------------
// Em arrays, o for...in percorre os índices (posições)
btnForIn.addEventListener("click", function () {
    let saida = "Exemplo com for...in:\n";

    for (let indice in nomes) {
        saida += "Índice: " + indice + " | Valor: " + nomes[indice] + "\n";
    }

    resultado.textContent = saida;
});


// -------------------------------------
// FOR...OF
// -------------------------------------
// O for...of percorre diretamente os valores
btnForOf.addEventListener("click", function () {
    let saida = "Exemplo com for...of:\n";

    for (let nome of nomes) {
        saida += "Nome: " + nome + "\n";
    }

    resultado.textContent = saida;
});


// -------------------------------------
// FOREACH
// -------------------------------------
// forEach executa uma função para cada elemento do array
btnForEach.addEventListener("click", function () {
    let saida = "Exemplo com forEach:\n";

    nomes.forEach(function (nome, indice) {
        saida += "Índice: " + indice + " | Nome: " + nome + "\n";
    });

    resultado.textContent = saida;
});


// -------------------------------------
// LIMPAR RESULTADO
// -------------------------------------
btnLimpar.addEventListener("click", function () {
    resultado.textContent = "Resultado limpo. Clique em um botão para testar um loop.";
});


// -------------------------------------
// INÍCIO DA PÁGINA
// -------------------------------------
mostrarDadosBase();