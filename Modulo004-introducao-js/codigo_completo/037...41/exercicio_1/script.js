/* 
OBJETIVO:
Ao clicar no botão, alterar a cor de fundo da caixa para aquamarine,
apresentar o texto 'clique' na consola e
remover o evento click do botão
*/

// buscar os elementos
let botao = document.querySelector('button')
let caixa = document.querySelector('.caixa')

// criar a função para que possa ser removida do evento
function executar(event) {

    // alterar a cor de fundo da caixa
    caixa.classList.toggle('cor-fundo-caixa')

    // remover o eventlistener do botão
    event.target.removeEventListener('click', executar)

    // ver o clique na consola
    console.log('clique')
}

// definir o event listener para o botao
botao.addEventListener('click', executar)