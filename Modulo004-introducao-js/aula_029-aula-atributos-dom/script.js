// ==========================================
// MANIPULAR ATRIBUTOS DE ELEMENTOS HTML
// ==========================================

// JavaScript é a linguagem.
// DOM é a estrutura da página no navegador.
// Os métodos getAttribute, setAttribute e removeAttribute
// pertencem aos elementos do DOM.

// ==========================================
// 1) CAPTURA DOS ELEMENTOS
// ==========================================

const imagem = document.getElementById("imagem");
const link = document.getElementById("linkSite");
const saida = document.getElementById("saida");

const btnVer = document.getElementById("btn-ver");
const btnTrocarImg = document.getElementById("btn-trocar-img");
const btnTrocarLink = document.getElementById("btn-trocar-link");
const btnRemoverLink = document.getElementById("btn-remover-link");
const btnRestaurar = document.getElementById("btn-restaurar");

// ==========================================
// 2) FUNÇÃO PARA MOSTRAR OS ATRIBUTOS
// ==========================================

function verAtributos() {
    const src = imagem.getAttribute("src");
    const alt = imagem.getAttribute("alt");
    const titleImg = imagem.getAttribute("title");
    const href = link.getAttribute("href");
    const target = link.getAttribute("target");

    saida.textContent =
        "Leitura atual dos atributos:\n\n" +
        `img src: ${src}\n` +
        `img alt: ${alt}\n` +
        `img title: ${titleImg}\n` +
        `link href: ${href}\n` +
        `link target: ${target}\n\n` +
        "Leitura humana:\n" +
        "getAttribute('src') = leia o valor atual do atributo src da imagem.";
}

// ==========================================
// 3) TROCAR ATRIBUTOS DA IMAGEM
// ==========================================

function trocarImagem() {
    imagem.setAttribute("src", "images/image_2.jpg");
    imagem.setAttribute("alt", "Imagem de um castelo");
    imagem.setAttribute("title", "Castelo");

    saida.textContent =
        "A imagem foi alterada com setAttribute().\n\n" +
        "Leitura humana:\n" +
        "imagem.setAttribute('src', 'images/image_2.jpg')\n" +
        "=> Altere o atributo src da imagem para o novo caminho.";
}

// ==========================================
// 4) TROCAR ATRIBUTOS DO LINK
// ==========================================

function trocarLink() {
    link.setAttribute("href", "https://www.spacex.com/");
    link.setAttribute("target", "_blank");
    link.setAttribute("title", "SpaceX");
    link.textContent = "Ver website da SpaceX";

    saida.textContent =
        "O link foi alterado com setAttribute().\n\n" +
        "Agora ele aponta para outro site, abre em nova aba e ganhou um title.";
}

// ==========================================
// 5) REMOVER ATRIBUTO DO LINK
// ==========================================

function removerHref() {
    link.removeAttribute("href");
    link.removeAttribute("title");
    link.textContent = "Link sem href no momento";

    saida.textContent =
        "O atributo href foi removido com removeAttribute().\n\n" +
        "Leitura humana:\n" +
        "link.removeAttribute('href')\n" +
        "=> Remova o atributo href do link.\n\n" +
        "Sem href, o elemento continua sendo <a>, mas deixa de funcionar como link clicável normal.";
}

// ==========================================
// 6) RESTAURAR ESTADO INICIAL
// ==========================================

function restaurarTudo() {
    imagem.setAttribute("src", "images/image_1.jpg");
    imagem.setAttribute("alt", "Imagem do oceano");
    imagem.setAttribute("title", "Oceano");

    link.setAttribute("href", "https://www.nasa.gov/");
    link.setAttribute("target", "_blank");
    link.removeAttribute("title");
    link.textContent = "Ver website";

    saida.textContent =
        "Os atributos originais foram restaurados.";
}

// ==========================================
// 7) EVENTOS
// ==========================================

btnVer.addEventListener("click", verAtributos);
btnTrocarImg.addEventListener("click", trocarImagem);
btnTrocarLink.addEventListener("click", trocarLink);
btnRemoverLink.addEventListener("click", removerHref);
btnRestaurar.addEventListener("click", restaurarTudo);