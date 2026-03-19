// Seleciona a caixa da página
let caixa = document.querySelector(".caixa"); //por classe

// Seleciona o botão da página
let botao = document.querySelector("button"); //pot tag

// Função executada quando o botão é clicado
function executar() {
    // Adiciona uma classe CSS na caixa
    caixa.classList.add("cor-fundo-caixa");

    // Mostra uma mensagem no console do navegador
    console.log("clique");

    // Remove o evento de clique do botão
    botao.removeEventListener("click", executar);
}

// Liga o clique do botão à função executar
botao.addEventListener("click", executar);