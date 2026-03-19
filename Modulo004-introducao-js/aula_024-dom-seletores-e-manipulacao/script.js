// =========================================================
// ESTUDO DE DOM
// Este arquivo mostra, na prática, como o JavaScript acessa
// elementos do HTML e altera a tela do navegador.
// =========================================================

// =========================================================
// 1) SELECIONANDO ELEMENTOS POR ID
// getElementById pertence ao DOM do navegador.
// Ele busca UM elemento que tenha um id específico.
// =========================================================
const titulo = document.getElementById('titulo');
const resultadoId = document.getElementById('resultado-id');

resultadoId.querySelector('.linha-resultado').innerText =
    `O título foi encontrado pelo id "titulo". Texto inicial: ${titulo.innerText}`;

// Aqui o JavaScript muda o texto exibido na notícia.
titulo.innerText = 'Vulcão no Alasca: estudo mostra por que a erupção ainda não aconteceu';

// =========================================================
// 2) SELECIONANDO ELEMENTOS POR CLASSE
// getElementsByClassName pertence ao DOM do navegador.
// Ele devolve uma coleção de elementos com a mesma classe.
// =========================================================
const linksNoticias = document.getElementsByClassName('outra-noticia');
const resultadoClasse = document.getElementsByClassName('resultado-classe')[0];

resultadoClasse.querySelector('.linha-resultado').innerText =
    `Foram encontrados ${linksNoticias.length} links com a classe "outra-noticia".`;

// Alterando o texto do primeiro link da coleção.
linksNoticias[0].innerText = 'Notícia número um (alterada via classe)';

// =========================================================
// 3) SELECIONANDO ELEMENTOS PELO ATRIBUTO NAME
// getElementsByName pertence ao DOM do navegador.
// É muito usado em formulários.
// =========================================================
const radiosLogin = document.getElementsByName('radio_login');
const resultadoName = document.getElementById('resultado-name');

resultadoName.querySelector('.linha-resultado').innerText =
    `Existem ${radiosLogin.length} campos com name "radio_login".`;

// Marcando a segunda opção via JavaScript.
radiosLogin[1].checked = true;

// =========================================================
// 4) SELECIONANDO POR NOME DA TAG
// getElementsByTagName pertence ao DOM do navegador.
// Ele busca elementos pelo tipo da tag HTML.
// =========================================================
const paragrafos = document.getElementsByTagName('p');
const resultadoTag = document.getElementById('resultado-tag');

resultadoTag.querySelector('.linha-resultado').innerText =
    `A página possui ${paragrafos.length} elementos <p> neste momento.`;

// =========================================================
// 5) className x classList
// className troca ou lê a string inteira das classes.
// classList trabalha melhor quando queremos adicionar,
// remover ou verificar classes específicas.
// =========================================================
const caixaPropriedades = document.getElementById('caixa-propriedades');

// className substitui a lista inteira de classes.
caixaPropriedades.className = 'caixa-demo caixa-destaque';

// classList adiciona uma classe sem apagar as outras.
caixaPropriedades.classList.add('caixa-alerta');

// =========================================================
// 6) innerText x innerHTML
// innerText escreve texto puro.
// innerHTML interpreta HTML e renderiza as tags.
// =========================================================
const explicacaoPropriedades = document.getElementById('explicacao-propriedades');

caixaPropriedades.innerText =
    'Este conteúdo foi escrito com innerText. Se eu colocar <strong>aqui</strong>, aparecerá apenas como texto comum.';

explicacaoPropriedades.innerHTML = `
    <h3>O que aconteceu aqui?</h3>
    <p><span class="codigo-inline">className</span> trocou a lista inteira de classes da caixa.</p>
    <p><span class="codigo-inline">classList.add()</span> adicionou uma nova classe sem apagar as anteriores.</p>
    <p><span class="codigo-inline">innerText</span> escreveu texto puro, sem interpretar tags HTML.</p>
    <p><span class="codigo-inline">innerHTML</span> escreveu conteúdo com <strong>HTML renderizado</strong> dentro da página.</p>
`;

// =========================================================
// 7) EVENTO DO FORMULÁRIO
// addEventListener pertence ao DOM do navegador.
// Ele escuta um evento que acontece em um elemento.
// Neste caso, estamos impedindo o recarregamento do form.
// =========================================================
const formulario = document.getElementById('form-login');
const usuario = document.getElementById('usuario');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nomeDigitado = usuario.value.trim() || 'usuário não informado';

    explicacaoPropriedades.innerHTML += `
        <p><strong>Evento submit:</strong> o formulário foi enviado sem recarregar a página.</p>
        <p><strong>value:</strong> o campo usuário contém: <span class="codigo-inline">${nomeDigitado}</span></p>
    `;
});
