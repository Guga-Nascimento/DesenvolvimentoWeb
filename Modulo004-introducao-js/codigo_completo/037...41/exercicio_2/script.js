/* 
OBJETIVO:
Adicionar 3 eventos click, um para cada elemento dentro do body 
cada um vai apresentar um texto único na consola
e fazer com que sejam independentes uns dos outros.
(Propagation)
*/


let section = document.querySelector("section")
let article = document.querySelector("article")
let div = document.querySelector("div")

// adicionar os eventos
section.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log('section')
})

article.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log('article')
})

div.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log('div')
})


/* 
Propagation - Refere-se à forma como os eventos viajam através do DOM.
O DOM contém elementos aninhados (parent e child). Os eventos podem ser
definidos no elemento pai e vão afetar também os elementos filho, a menos
que consigamos interromper essa conexão entre os elementos.

Bubbling e Capturing são dois conceitos relacionados com as fases da propagação.
Bubbling é o fluxo do elemento target até ao root, e 
Capturing é o fluxo do elemento root até ao target.
*/