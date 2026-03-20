// ======================================================
// SELEÇÃO DOS ELEMENTOS PRINCIPAIS
// Aqui pegamos o formulário e a área onde será exibida
// a mensagem geral de erro ou sucesso.
// ======================================================

const formulario = document.formulario_login;
const mensagemGeral = document.querySelector('#mensagemGeral');


// ======================================================
// LIMPAR ESTADO ANTERIOR
// Remove mensagens antigas e classes visuais de erro/sucesso
// antes de fazer uma nova validação.
// ======================================================

function limparValidacao() {
    document.querySelectorAll('.error').forEach((erro) => erro.remove());

    formulario.querySelectorAll('input').forEach((input) => {
        input.classList.remove('erro-input');
        input.classList.remove('sucesso-input');
    });

    mensagemGeral.textContent = '';
    mensagemGeral.classList.remove('erro-geral');
    mensagemGeral.classList.remove('sucesso-geral');
}


// ======================================================
// MOSTRAR ERRO EM UM CAMPO
// Adiciona classe visual no input e insere a mensagem
// logo após ele.
// ======================================================

function mostrarErro(campo, mensagem) {
    campo.classList.add('erro-input');
    campo.insertAdjacentHTML('afterend', `<span class="error">${mensagem}</span>`);
}


// ======================================================
// MARCAR CAMPO COMO VÁLIDO
// Se o campo passou na validação, ele recebe um destaque
// verde para mostrar que está correto.
// ======================================================

function mostrarSucesso(campo) {
    campo.classList.add('sucesso-input');
}


// ======================================================
// VALIDAR USUÁRIO
// Regras:
// 1. não pode estar vazio
// 2. deve ter pelo menos 3 caracteres
// ======================================================

function validarUsuario(campo) {
    const valor = campo.value.trim();

    if (valor === '') {
        mostrarErro(campo, 'Usuário obrigatório');
        return false;
    }

    if (valor.length < 3) {
        mostrarErro(campo, 'Usuário deve ter pelo menos 3 caracteres');
        return false;
    }

    mostrarSucesso(campo);
    return true;
}


// ======================================================
// VALIDAR SENHA
// Regras:
// 1. não pode estar vazia
// 2. deve ter pelo menos 6 caracteres
// ======================================================

function validarSenha(campo) {
    const valor = campo.value.trim();

    if (valor === '') {
        mostrarErro(campo, 'Senha obrigatória');
        return false;
    }

    if (valor.length < 6) {
        mostrarErro(campo, 'Senha deve ter pelo menos 6 caracteres');
        return false;
    }

    mostrarSucesso(campo);
    return true;
}


// ======================================================
// EVENTO DE SUBMIT
// O formulário tenta enviar, limpamos o estado antigo,
// validamos cada campo e só deixamos seguir se tudo
// estiver correto.
// ======================================================

formulario.addEventListener('submit', (e) => {
    limparValidacao();

    const campoUsuario = formulario.usuario;
    const campoSenha = formulario.senha;

    const usuarioValido = validarUsuario(campoUsuario);
    const senhaValida = validarSenha(campoSenha);

    const formularioValido = usuarioValido && senhaValida;

    if (!formularioValido) {
        e.preventDefault();
        mensagemGeral.textContent = 'Corrija os campos destacados antes de enviar.';
        mensagemGeral.classList.add('erro-geral');
        return;
    }

    e.preventDefault(); // aqui mantive para estudo; em produção você removeria isso
    mensagemGeral.textContent = 'Formulário validado com sucesso.';
    mensagemGeral.classList.add('sucesso-geral');
});


// ======================================================
// VALIDAÇÃO ENQUANTO DIGITA
// Isso melhora a experiência do usuário.
// Quando ele começa a corrigir, o campo já pode ser
// reavaliado sem esperar novo submit.
// ======================================================

formulario.usuario.addEventListener('input', () => {
    limparValidacao();
    validarUsuario(formulario.usuario);
});

formulario.senha.addEventListener('input', () => {
    limparValidacao();
    validarSenha(formulario.senha);
});