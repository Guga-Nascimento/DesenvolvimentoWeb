// ======================================================
// DOM - className, classList, innerHTML e innerText
// ======================================================
//
// Este arquivo foi pensado para mostrar tudo NA TELA.
// O usuário clica em um botão e vê:
// 1) a mudança visual
// 2) a explicação
// 3) o exemplo de código correspondente

// ------------------------------------------------------
// 1) CAPTURA DOS ELEMENTOS DO HTML
// ------------------------------------------------------
const titulo = document.getElementById("titulo");
const noticia = document.getElementById("noticia");
const resultadoDemo = document.getElementById("resultado-demo");

const infoRecurso = document.getElementById("info-recurso");
const infoServe = document.getElementById("info-serve");
const infoDiferenca = document.getElementById("info-diferenca");
const infoClasses = document.getElementById("info-classes");
const codigoExemplo = document.getElementById("codigo-exemplo");

const btnClassName = document.getElementById("btn-classname");
const btnClassList = document.getElementById("btn-classlist");
const btnInnerHTML = document.getElementById("btn-innerhtml");
const btnInnerText = document.getElementById("btn-innertext");
const btnResetar = document.getElementById("btn-resetar");

// ------------------------------------------------------
// 2) ESTADO INICIAL
// Guardamos o conteúdo original para poder resetar depois
// ------------------------------------------------------
const tituloOriginal = titulo.textContent;
const resultadoOriginal = resultadoDemo.innerHTML;

// ------------------------------------------------------
// 3) FUNÇÃO AUXILIAR PARA ATUALIZAR O PAINEL
// ------------------------------------------------------
function atualizarPainel(recurso, serve, diferenca, codigo) {
    infoRecurso.innerText = recurso;
    infoServe.innerText = serve;
    infoDiferenca.innerText = diferenca;
    infoClasses.innerText = titulo.className || "(sem classes)";
    codigoExemplo.innerText = codigo;
}

// ------------------------------------------------------
// 4) FUNÇÃO PARA RESETAR A DEMONSTRAÇÃO
// ------------------------------------------------------
function resetarDemonstracao() {
    titulo.className = "texto-titulo";
    titulo.textContent = tituloOriginal;

    noticia.classList.remove("card-destacado", "borda-ativa");

    resultadoDemo.innerHTML = resultadoOriginal;

    atualizarPainel(
        "Nenhum recurso selecionado",
        "Clique em um botão para executar a demonstração.",
        "Aqui aparecerá a diferença entre os recursos estudados.",
        "document.getElementById('algum-id');"
    );
}

// ------------------------------------------------------
// 5) EXEMPLO COM className
// className lê ou troca a string inteira das classes
// ------------------------------------------------------
function demonstrarClassName() {
    titulo.className = "texto-titulo texto-centrar titulo-destaque";

    resultadoDemo.innerHTML = `
        <p><strong>className</strong> substituiu o conjunto de classes do título.</p>
        <p>Agora o título ficou centralizado e destacado porque recebeu uma nova string de classes.</p>
    `;

    atualizarPainel(
        "className",
        "Serve para ler ou definir todas as classes de um elemento de uma vez.",
        "Ao atribuir um valor em className, você troca a lista inteira de classes. Ele é mais bruto que classList.",
        `titulo.className = "texto-titulo texto-centrar titulo-destaque";`
    );
}

// ------------------------------------------------------
// 6) EXEMPLO COM classList
// classList manipula classes individualmente
// ------------------------------------------------------
function demonstrarClassList() {
    titulo.classList.toggle("texto-centrar");
    titulo.classList.toggle("titulo-destaque");
    noticia.classList.toggle("card-destacado");
    noticia.classList.toggle("borda-ativa");

    const temDestaque = titulo.classList.contains("titulo-destaque");

    resultadoDemo.innerHTML = `
        <p><strong>classList</strong> manipulou classes individualmente.</p>
        <p>O título tem a classe <code>titulo-destaque</code>? <strong>${temDestaque}</strong></p>
        <p>Com classList você pode usar <code>add()</code>, <code>remove()</code>, <code>toggle()</code> e <code>contains()</code>.</p>
    `;

    atualizarPainel(
        "classList",
        "Serve para adicionar, remover, alternar e verificar classes individualmente.",
        "Diferente de className, classList não precisa sobrescrever a string inteira. Ele trabalha classe por classe.",
        `titulo.classList.toggle("titulo-destaque");
titulo.classList.toggle("texto-centrar");
noticia.classList.toggle("card-destacado");
titulo.classList.contains("titulo-destaque");`
    );
}

// ------------------------------------------------------
// 7) EXEMPLO COM innerHTML
// innerHTML interpreta as tags HTML
// ------------------------------------------------------
function demonstrarInnerHTML() {
    resultadoDemo.innerHTML = `
        <p><strong>Com innerHTML</strong>, as tags são interpretadas pelo navegador.</p>
        <ul>
            <li>Este item foi criado com HTML</li>
            <li><em>Este texto está em itálico</em></li>
            <li><span style="color: #1d4ed8; font-weight: bold;">Este texto ficou estilizado</span></li>
        </ul>
    `;

    atualizarPainel(
        "innerHTML",
        "Serve para ler ou inserir conteúdo HTML dentro de um elemento.",
        "Quando você usa innerHTML, o navegador interpreta as tags. Por isso ele cria elementos reais na tela.",
        `resultadoDemo.innerHTML = \`
<p><strong>Com innerHTML</strong>, as tags são interpretadas.</p>
<ul>
    <li>Item 1</li>
    <li><em>Texto em itálico</em></li>
</ul>
\`;`
    );
}

// ------------------------------------------------------
// 8) EXEMPLO COM innerText
// innerText mostra somente texto visível
// ------------------------------------------------------
function demonstrarInnerText() {
    resultadoDemo.innerText =
        "Com innerText, as tags NÃO são interpretadas.\n\n" +
        "<strong>Isso aparece como texto comum</strong>\n" +
        "<em>Isso não vira itálico</em>\n" +
        "<li>Isso não vira item de lista</li>";

    atualizarPainel(
        "innerText",
        "Serve para ler ou escrever apenas o texto visível de um elemento.",
        "Diferente de innerHTML, ele não interpreta tags. Ele mostra o conteúdo como texto puro.",
        `resultadoDemo.innerText =
"Com innerText, as tags não são interpretadas.
<strong>Isso vira texto</strong>";`
    );
}

// ------------------------------------------------------
// 9) EVENTOS
// ------------------------------------------------------
btnClassName.addEventListener("click", demonstrarClassName);
btnClassList.addEventListener("click", demonstrarClassList);
btnInnerHTML.addEventListener("click", demonstrarInnerHTML);
btnInnerText.addEventListener("click", demonstrarInnerText);
btnResetar.addEventListener("click", resetarDemonstracao);

// ------------------------------------------------------
// 10) INICIALIZAÇÃO
// ------------------------------------------------------
resetarDemonstracao();