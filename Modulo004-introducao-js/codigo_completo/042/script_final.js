// DESATIVAR A FUNÇÃO NATIVA DE UM LINK
document.querySelector('a').addEventListener('click', (e) => {
    console.log(e)
    e.preventDefault()
})

// DESATIVAR A SUBMISSÃO DO FORMULÁRIO
document.querySelector('input[type="submit"]')
.addEventListener('click', (event) => {
    
    // validação de formulário
    // ...
    console.log('submetido')

    // aconteceu um erro na validação?
    event.preventDefault()
})

// IMPORTANTE: no preventDefault, também existe propagação.

/* 
adicionar um evento click para o div e apresentar na consola o texto DIV
mostrar que ao clicar no botão de submissão, o texto div vai aparecer.
Então, adicionar event.stopPropagation() dentro do event handler do submit,
logo antes do preventDefault()
*/