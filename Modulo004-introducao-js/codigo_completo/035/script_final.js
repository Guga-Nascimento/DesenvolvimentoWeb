// EVENT HANDLERS
function funcao(){
    console.log('clique')
}

function alterar_texto(){
    document.querySelector("h1").textContent = "Novo texto do título"
}

function outra_funcao(e){
    console.log(e.target)
}