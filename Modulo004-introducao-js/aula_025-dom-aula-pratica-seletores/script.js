// =====================================================
// 1) SELEÇÃO DE ELEMENTOS DO DOM
// Aqui usamos recursos do navegador (DOM) para buscar
// elementos que já existem no HTML.
// =====================================================

const titulo = document.getElementById("titulo");
const linksNoticias = document.getElementsByClassName("outra-noticia");
const radiosLogin = document.getElementsByName("radio_login");
const paragrafos = document.getElementsByTagName("p");
const saida = document.getElementById("saida");
const formulario = document.getElementById("form-login");
const campoUsuario = document.getElementById("usuario");
const campoSenha = document.getElementById("senha");


// =====================================================
// 2) ALTERANDO CONTEÚDO COM innerText
// innerText altera apenas o texto visível.
// Ele NÃO interpreta tags HTML.
// =====================================================

titulo.innerText = "DOM na prática: entendendo seletores e manipulação de conteúdo";


// =====================================================
// 3) ALTERANDO CONTEÚDO COM innerHTML
// innerHTML interpreta HTML.
// Então podemos inserir tags como <strong>, <br> e <span>.
// =====================================================

saida.innerHTML = `
    <div class="bloco-explicacao">
        <strong>getElementById("titulo")</strong><br>
        Encontrou o elemento com id <span class="destaque">titulo</span> e trocou o texto dele com <strong>innerText</strong>.
    </div>
`;


// =====================================================
// 4) USANDO classList
// classList pertence ao DOM e serve para adicionar,
// remover ou verificar classes CSS sem apagar as demais.
// =====================================================

titulo.classList.add("mostrar-borda");


// =====================================================
// 5) USANDO className
// className trabalha com a string inteira das classes.
// Se você trocar className, pode apagar classes antigas.
// =====================================================

linksNoticias[0].className = "outra-noticia destaque";


// =====================================================
// 6) EXIBINDO RESULTADOS DOS SELETORES NA TELA
// Aqui mostramos quantos elementos cada seletor encontrou.
// =====================================================

saida.innerHTML += `
    <div class="bloco-explicacao">
        <strong>getElementsByClassName("outra-noticia")</strong><br>
        Quantidade de links encontrados: <span class="destaque">${linksNoticias.length}</span>
    </div>

    <div class="bloco-explicacao">
        <strong>getElementsByName("radio_login")</strong><br>
        Quantidade de radios encontrados: <span class="destaque">${radiosLogin.length}</span>
    </div>

    <div class="bloco-explicacao">
        <strong>getElementsByTagName("p")</strong><br>
        Quantidade de parágrafos encontrados: <span class="destaque">${paragrafos.length}</span>
    </div>
`;


// =====================================================
// 7) ALTERANDO LINKS DA NOTÍCIA
// Aqui estamos mudando o texto de alguns links para
// deixar mais claro o efeito da manipulação.
// =====================================================

linksNoticias[1].innerText = "Nova descoberta sobre atividade vulcânica";
linksNoticias[2].innerText = "Como os geólogos tentam prever erupções";


// =====================================================
// 8) MARCANDO UM RADIO PELO DOM
// checked serve para ler ou alterar o estado de
// radios e checkboxes.
// =====================================================

radiosLogin[1].checked = true;


// =====================================================
// 9) EXPLICANDO DIFERENÇAS IMPORTANTES NA PRÓPRIA TELA
// Aqui reforçamos o estudo de className, classList,
// innerText e innerHTML.
// =====================================================

saida.innerHTML += `
    <div class="bloco-explicacao">
        <strong>className</strong><br>
        Substitui o conjunto de classes como texto.
        É útil, mas pode apagar outras classes sem querer.
    </div>

    <div class="bloco-explicacao">
        <strong>classList</strong><br>
        Permite adicionar, remover e verificar classes de forma mais segura.
        Exemplo: <span class="destaque">elemento.classList.add("ativo")</span>
    </div>

    <div class="bloco-explicacao">
        <strong>innerText</strong><br>
        Escreve texto puro na tela.
        Se eu colocar uma tag HTML, ela aparece como texto comum.
    </div>

    <div class="bloco-explicacao">
        <strong>innerHTML</strong><br>
        Escreve conteúdo interpretando HTML.
        Por isso ele consegue criar <strong>negrito</strong>, quebras de linha e outras tags.
    </div>
`;


// =====================================================
// 10) EVENTO DE ENVIO DO FORMULÁRIO
// addEventListener é um recurso do DOM.
// Ele "ouve" um evento e executa uma função quando
// esse evento acontece.
// =====================================================

formulario.addEventListener("submit", function (evento) {
    // Impede o recarregamento da página
    evento.preventDefault();

    // Descobre qual radio está marcado
    let opcaoSelecionada = "não informado";

    for (let radio of radiosLogin) {
        if (radio.checked) {
            opcaoSelecionada = radio.value;
        }
    }

    // Mostra o resultado do formulário na tela
    saida.innerHTML += `
        <div class="bloco-explicacao">
            <strong>Resultado do formulário</strong><br>
            Usuário digitado: <span class="destaque">${campoUsuario.value}</span><br>
            Senha digitada: <span class="destaque">${campoSenha.value || "(vazia)"}</span><br>
            Radio selecionado: <span class="destaque">${opcaoSelecionada}</span>
        </div>
    `;
});