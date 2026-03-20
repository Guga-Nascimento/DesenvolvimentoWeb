// INTRODUÇÃO À VALIDAÇÃO DE FORMULÁRIOS

document.formulario_login.addEventListener('submit', (e) =>{
    //buscar valores dos campos
    let usuario = e.target.usuario.value
    let senha = e.target.senha.value
    let submit = true
    //validar usuario
    if(usuario === ""){
        submit = false

        //erro
        let tmp = document.querySelector('input[name="usuario"]')
        tmp.insertAdjacentHTML('afterend', '<span class="error"> Usuário obrigatório </span>')
    }

    //validar senha 
        if(senha === ""){
        submit = false

        //erro
        let tmp = document.querySelector('input[name="senha"]')
        tmp.insertAdjacentHTML('afterend', '<span class="error"> Senha obrigatória </span>')
    }

    // verificar se o formulario pode ser submetido
    if(!submit){
        e.preventDefault()

        setTimeout(() => {

            document.querySelectorAll(".error").forEach( e => e.remove())

        }, 2000)
    }
})
