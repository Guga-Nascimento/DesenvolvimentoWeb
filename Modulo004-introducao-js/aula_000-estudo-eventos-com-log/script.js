/*
OBJETIVO:
Estudar vários eventos do addEventListener() de forma visual
e também acompanhar tudo pelo console.
*/


// =====================================================
// 1) Teste inicial para saber se o JS carregou
// =====================================================
console.log('✅ script.js foi carregado com sucesso.');


// =====================================================
// 2) Seleção dos elementos da página
// =====================================================
const botaoClique = document.getElementById('botaoClique');
const campoTexto = document.getElementById('campoTexto');
const campoTeclado = document.getElementById('campoTeclado');
const areaMouse = document.getElementById('areaMouse');
const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const seletor = document.getElementById('seletor');
const mensagemPrincipal = document.getElementById('mensagemPrincipal');
const log = document.getElementById('log');


// =====================================================
// 3) Conferência dos elementos encontrados
// =====================================================
// Se algum vier como null, o problema está no HTML ou no id.
console.log('botaoClique:', botaoClique);
console.log('campoTexto:', campoTexto);
console.log('campoTeclado:', campoTeclado);
console.log('areaMouse:', areaMouse);
console.log('formulario:', formulario);
console.log('nome:', nome);
console.log('seletor:', seletor);
console.log('mensagemPrincipal:', mensagemPrincipal);
console.log('log:', log);


// =====================================================
// 4) Função para mostrar mensagens na tela e no console
// =====================================================
function mostrarEvento(texto) {
  console.log('📌 Evento disparado:', texto);

  mensagemPrincipal.textContent = texto;

  const paragrafo = document.createElement('p');
  paragrafo.textContent = texto;

  log.prepend(paragrafo);
}


// =====================================================
// 5) Evento de clique
// =====================================================
if (botaoClique) {
  botaoClique.addEventListener('click', () => {
    console.log('🖱️ Clique no botão detectado.');
    mostrarEvento('Evento click: você clicou no botão.');
  });
}


// =====================================================
// 6) Eventos de input, focus e blur
// =====================================================
if (campoTexto) {
  campoTexto.addEventListener('focus', () => {
    console.log('🎯 Campo de texto recebeu foco.');
    mostrarEvento('Evento focus: o campo de texto recebeu foco.');
  });

  campoTexto.addEventListener('input', () => {
    console.log('⌨️ Digitando no campoTexto:', campoTexto.value);
    mostrarEvento(`Evento input: valor atual = "${campoTexto.value}"`);
  });

  campoTexto.addEventListener('blur', () => {
    console.log('🚪 Campo de texto perdeu o foco.');
    mostrarEvento('Evento blur: o campo de texto perdeu o foco.');
  });
}


// =====================================================
// 7) Eventos de teclado
// =====================================================
if (campoTeclado) {
  campoTeclado.addEventListener('keydown', (event) => {
    console.log('⬇️ keydown:', event.key);
    mostrarEvento(`Evento keydown: tecla pressionada = ${event.key}`);
  });

  campoTeclado.addEventListener('keyup', (event) => {
    console.log('⬆️ keyup:', event.key);
    mostrarEvento(`Evento keyup: tecla solta = ${event.key}`);
  });
}


// =====================================================
// 8) Eventos de mouse
// =====================================================
if (areaMouse) {
  areaMouse.addEventListener('mouseenter', () => {
    console.log('➡️ Mouse entrou na área.');
    mostrarEvento('Evento mouseenter: o mouse entrou na área.');
  });

  areaMouse.addEventListener('mouseleave', () => {
    console.log('⬅️ Mouse saiu da área.');
    mostrarEvento('Evento mouseleave: o mouse saiu da área.');
  });

  areaMouse.addEventListener('mousemove', () => {
    console.log('🔄 Mouse se movendo na área.');
    mensagemPrincipal.textContent = 'Evento mousemove: o mouse está se movendo na área.';
  });
}


// =====================================================
// 9) Evento de formulário
// =====================================================
if (formulario) {
  formulario.addEventListener('submit', (event) => {
    console.log('📨 Tentativa de envio do formulário.');
    event.preventDefault();

    if (nome.value.trim() === '') {
      console.log('⚠️ O campo nome está vazio.');
      mostrarEvento('Evento submit: digite um nome antes de enviar.');
      return;
    }

    console.log('✅ Formulário enviado com nome:', nome.value);
    mostrarEvento(`Evento submit: formulário enviado com o nome "${nome.value}".`);
    formulario.reset();
  });
}


// =====================================================
// 10) Evento de change
// =====================================================
if (seletor) {
  seletor.addEventListener('change', () => {
    console.log('🔽 Nova opção selecionada:', seletor.value);
    mostrarEvento(`Evento change: opção escolhida = ${seletor.value}`);
  });
}