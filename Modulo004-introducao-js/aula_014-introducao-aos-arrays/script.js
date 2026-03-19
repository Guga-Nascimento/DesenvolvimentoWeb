// =====================================
// INTRODUÇÃO AOS ARRAYS
// =====================================

// Antes do array, seria preciso criar várias variáveis:
let nome1 = "joao";
let nome2 = "ana";
let nome3 = "carlos";

// Com array, agrupamos tudo em uma única variável:
let nomes = ["joao", "ana", "carlos"];

// Selecionando elementos do HTML
const saida = document.getElementById("saida");
const btnMostrarTodos = document.getElementById("btnMostrarTodos");
const btnMostrarSegundo = document.getElementById("btnMostrarSegundo");
const btnAlterarNome = document.getElementById("btnAlterarNome");

// Mostrar todos os nomes do array
btnMostrarTodos.addEventListener("click", function () {
    saida.textContent =
        "Todos os nomes do array:\n" + nomes.join(", ");
});

// Mostrar o segundo elemento do array
btnMostrarSegundo.addEventListener("click", function () {
    saida.textContent =
        "Segundo nome do array: " + nomes[1];
});

// Alterar o segundo elemento do array
btnAlterarNome.addEventListener("click", function () {
    nomes[1] = "maria";

    saida.textContent =
        "Nome alterado com sucesso.\nNovo array: " + nomes.join(", ");
});