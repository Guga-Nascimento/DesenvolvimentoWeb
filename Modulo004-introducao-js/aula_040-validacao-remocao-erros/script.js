// ======================================================
// SELEÇÃO DOS CAMPOS E DO FORMULÁRIO
// Aqui pegamos o formulário e os inputs que serão validados.
// ======================================================

const formulario = document.formulario_login;
const campoUsuario = formulario.usuario;
const campoSenha = formulario.senha;


// ======================================================
// FUNÇÃO PARA MOSTRAR ERRO
// Esta função adiciona a classe visual no input
// e cria a mensagem de erro logo depois do campo.
// Só cria a mensagem se ela ainda não existir.
// ======================================================

function mostrarErro(campo, mensagem) {
    campo.classList.add('erro-input');

    const proximoElemento = campo.nextElementSibling;

    if (!proximoElemento || !proximoElemento.classList.contains('error')) {
        campo.insertAdjacentHTML('afterend', `<span class="error">${mensagem}</span>`);
    }
}


// ======================================================
// FUNÇÃO PARA REMOVER ERRO
// Remove a borda vermelha e a mensagem do campo,
// caso exista um span.error logo depois dele.
// ======================================================

function removerErro(campo) {
    campo.classList.remove('erro-input');

    const proximoElemento = campo.nextElementSibling;

    if (proximoElemento && proximoElemento.classList.contains('error')) {
        proximoElemento.remove();
    }
}


// ======================================================
// FUNÇÃO DE VALIDAÇÃO DE CAMPO VAZIO
// Usa trim() para evitar que espaços em branco
// sejam aceitos como preenchimento válido.
// ======================================================

function validarCampoVazio(campo, mensagem) {
    if (campo.value.trim() === '') {
        mostrarErro(campo, mensagem);
        return false;
    }

    return true;
}


// ======================================================
// EVENTO DE SUBMIT DO FORMULÁRIO
// Antes de validar, removemos os erros antigos.
// Depois validamos usuário e senha.
// Se algo estiver errado, impedimos o envio.
// ======================================================

formulario.addEventListener('submit', (event) => {
    removerErro(campoUsuario);
    removerErro(campoSenha);

    let formularioValido = true;

    if (!validarCampoVazio(campoUsuario, 'Usuário é de preenchimento obrigatório')) {
        formularioValido = false;
    }

    if (!validarCampoVazio(campoSenha, 'Senha é de preenchimento obrigatório')) {
        formularioValido = false;
    }

    if (!formularioValido) {
        event.preventDefault();
    }
});


// ======================================================
// REMOÇÃO DO ERRO AO DIGITAR
// Quando o usuário começa a corrigir o campo,
// a mensagem some e a borda vermelha é removida.
// ======================================================

campoUsuario.addEventListener('input', () => {
    removerErro(campoUsuario);
});

campoSenha.addEventListener('input', () => {
    removerErro(campoSenha);
});