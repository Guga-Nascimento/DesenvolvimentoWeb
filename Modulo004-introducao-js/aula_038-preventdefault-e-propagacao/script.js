// DESATIVAR A FUNÇÃO NATIVA DE UM LINK
document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault()
})
// DESATIVAR A SUBMISSÃO DO FORMULÁRIO
document.querySelector('input[type="submit"]')
.addEventListener('click', (event) => {
    console.log(event)
    event.stopPropagation()
    event.preventDefault()

})

document.querySelector('.caixa').addEventListener('click', () => {
    console.log('DIV')
})


// CUIDADO COM A PROPAGAÇÃO!