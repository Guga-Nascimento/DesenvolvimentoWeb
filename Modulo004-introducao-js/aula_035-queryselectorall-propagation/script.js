/* 
OBJETIVO:
O mesmo exercício anterior, mas com unificação da instrução
para os 3 elementos e sem propagação de eventos.
*/

//buscando uma coleção de elementos.

let elementos = document.querySelectorAll('section, article, div')

elementos.forEach((event) => {
    event.addEventListener('click', (e) => {
        e.stopPropagation()
        console.log(e.target.tagName)
    })
})