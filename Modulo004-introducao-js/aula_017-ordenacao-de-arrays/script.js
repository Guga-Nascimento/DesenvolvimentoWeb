// =====================================
// ORDENAÇÃO DE ARRAYS
// =====================================

// Array de nomes usado nos exemplos
let nomes = ["joao", "ana", "carlos", "xavier", "catarina", "fernanda"];

// Array numérico usado nos exemplos
let numeros = [1, 30, 20, 100, 50, 56, 45];

// -------------------------------------
// PEGANDO ELEMENTOS DO HTML
// -------------------------------------
// document.getElementById("id") procura um elemento no HTML pelo id
const arrayNomes = document.getElementById("arrayNomes");
const arrayNumeros = document.getElementById("arrayNumeros");
const resultado = document.getElementById("resultado");

const btnOrdemCrescente = document.getElementById("btnOrdemCrescente");
const btnOrdemDecrescente = document.getElementById("btnOrdemDecrescente");
const btnResetarNomes = document.getElementById("btnResetarNomes");

const btnSortNumerosErrado = document.getElementById("btnSortNumerosErrado");
const btnNumerosCrescente = document.getElementById("btnNumerosCrescente");
const btnNumerosDecrescente = document.getElementById("btnNumerosDecrescente");
const btnResetarNumeros = document.getElementById("btnResetarNumeros");

// -------------------------------------
// ATUALIZAR A TELA
// -------------------------------------
// JSON.stringify() transforma o array em texto
function atualizarTela() {
    arrayNomes.textContent = JSON.stringify(nomes);
    arrayNumeros.textContent = JSON.stringify(numeros);
}

// -------------------------------------
// sort() em strings
// -------------------------------------
// sort() organiza os elementos em ordem crescente
btnOrdemCrescente.addEventListener("click", function () {
    nomes.sort();

    resultado.textContent =
        "sort() organizou os nomes em ordem crescente.\n" +
        "Resultado: " + JSON.stringify(nomes);

    atualizarTela();
});

// -------------------------------------
// sort() + reverse() em strings
// -------------------------------------
// reverse() inverte a ordem atual do array
btnOrdemDecrescente.addEventListener("click", function () {
    nomes.sort().reverse();

    resultado.textContent =
        "sort().reverse() organizou os nomes em ordem decrescente.\n" +
        "Resultado: " + JSON.stringify(nomes);

    atualizarTela();
});

// -------------------------------------
// Resetar array de nomes
// -------------------------------------
btnResetarNomes.addEventListener("click", function () {
    nomes = ["joao", "ana", "carlos", "xavier", "catarina", "fernanda"];

    resultado.textContent = "O array de nomes voltou ao estado inicial.";

    atualizarTela();
});

// -------------------------------------
// sort() em números sem função
// -------------------------------------
// Aqui mostramos o comportamento que costuma confundir:
// o sort() puro trata os valores como texto
btnSortNumerosErrado.addEventListener("click", function () {
    numeros.sort();

    resultado.textContent =
        "sort() puro em números pode gerar ordem incorreta.\n" +
        "Ele compara como texto.\n" +
        "Resultado: " + JSON.stringify(numeros);

    atualizarTela();
});

// -------------------------------------
// sort() correto em números - crescente
// -------------------------------------
// (a, b) => a - b
// Se o resultado for negativo, a vem antes de b
btnNumerosCrescente.addEventListener("click", function () {
    numeros.sort(function (a, b) {
        return a - b;
    });

    resultado.textContent =
        "Ordenação numérica crescente com sort(function(a, b) { return a - b; }).\n" +
        "Resultado: " + JSON.stringify(numeros);

    atualizarTela();
});

// -------------------------------------
// sort() correto em números - decrescente
// -------------------------------------
// (a, b) => b - a
// Se o resultado for negativo, b vem antes de a
btnNumerosDecrescente.addEventListener("click", function () {
    numeros.sort(function (a, b) {
        return b - a;
    });

    resultado.textContent =
        "Ordenação numérica decrescente com sort(function(a, b) { return b - a; }).\n" +
        "Resultado: " + JSON.stringify(numeros);

    atualizarTela();
});

// -------------------------------------
// Resetar array de números
// -------------------------------------
btnResetarNumeros.addEventListener("click", function () {
    numeros = [1, 30, 20, 100, 50, 56, 45];

    resultado.textContent = "O array de números voltou ao estado inicial.";

    atualizarTela();
});

// Mostra os arrays assim que a página abre
atualizarTela();