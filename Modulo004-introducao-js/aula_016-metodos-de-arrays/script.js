// =====================================
// MÉTODOS DE ARRAYS
// =====================================

// Array principal usado nos exemplos
let nomes = ["joao", "ana", "carlos"];

// -------------------------------------
// PEGANDO ELEMENTOS DO HTML
// -------------------------------------
// document.getElementById("id-do-elemento")
// Procura um elemento na página pelo valor do atributo id
const arrayOriginal = document.getElementById("arrayOriginal");
const resultado = document.getElementById("resultado");

const btnSlice = document.getElementById("btnSlice");
const btnConcat = document.getElementById("btnConcat");
const btnIncludes = document.getElementById("btnIncludes");
const btnIndexOf = document.getElementById("btnIndexOf");
const btnJoin = document.getElementById("btnJoin");
const btnResetar = document.getElementById("btnResetar");

// -------------------------------------
// FUNÇÃO PARA ATUALIZAR O ARRAY NA TELA
// -------------------------------------
// JSON.stringify() transforma o array em texto
// para ele aparecer de forma organizada no navegador
function atualizarArrayNaTela() {
    arrayOriginal.textContent = JSON.stringify(nomes);
}

// -------------------------------------
// slice()
// -------------------------------------
// Extrai uma parte do array e devolve um novo array
btnSlice.addEventListener("click", function () {
    const nomesExtraidos = nomes.slice(0, 2);

    resultado.textContent =
        "slice(0, 2) extrai os elementos das posições 0 e 1.\n" +
        "Resultado: " + JSON.stringify(nomesExtraidos);

    atualizarArrayNaTela();
});

// -------------------------------------
// concat()
// -------------------------------------
// Junta arrays e devolve um novo array
btnConcat.addEventListener("click", function () {
    const outrosNomes = ["joaquim", "carla", "manuel"];
    const nomesJuntos = nomes.concat(outrosNomes);

    resultado.textContent =
        "concat() junta dois arrays.\n" +
        "Resultado: " + JSON.stringify(nomesJuntos);

    atualizarArrayNaTela();
});

// -------------------------------------
// includes()
// -------------------------------------
// Verifica se um valor existe no array
btnIncludes.addEventListener("click", function () {
    const existeCarlos = nomes.includes("carlos");

    resultado.textContent =
        'includes("carlos") verifica se "carlos" existe no array.\n' +
        "Resultado: " + existeCarlos;

    atualizarArrayNaTela();
});

// -------------------------------------
// indexOf()
// -------------------------------------
// Informa a posição de um elemento no array
btnIndexOf.addEventListener("click", function () {
    const posicaoAna = nomes.indexOf("ana");

    resultado.textContent =
        'indexOf("ana") procura a posição de "ana".\n' +
        "Resultado: posição " + posicaoAna;

    atualizarArrayNaTela();
});

// -------------------------------------
// join()
// -------------------------------------
// Junta todos os elementos do array em uma string
btnJoin.addEventListener("click", function () {
    const todosOsNomes = nomes.join(" - ");

    resultado.textContent =
        'join(" - ") transforma o array em uma string.\n' +
        "Resultado: " + todosOsNomes;

    atualizarArrayNaTela();
});

// -------------------------------------
// RESETAR
// -------------------------------------
btnResetar.addEventListener("click", function () {
    nomes = ["joao", "ana", "carlos"];

    resultado.textContent =
        "O array voltou ao estado inicial.";

    atualizarArrayNaTela();
});

// Mostra o array assim que a página abre
atualizarArrayNaTela();