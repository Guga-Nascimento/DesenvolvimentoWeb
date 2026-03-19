// =====================================================
// 1) Seleciona todos os elementos que receberão clique
// =====================================================
const elementos = document.querySelectorAll('section, article, div');
const mensagem = document.getElementById('mensagem');

// =====================================================
// 2) Função que atualiza o texto na tela
// =====================================================
function mostrarMensagem(texto) {
    mensagem.textContent = texto;
}

// =====================================================
// 3) Adiciona o mesmo padrão de evento para todos
// =====================================================
elementos.forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        e.stopPropagation();

        const nomeTag = e.currentTarget.tagName;

        console.log(`Você clicou em ${nomeTag}`);
        mostrarMensagem(`Você clicou em ${nomeTag}`);
    });
});