/* 
OBJETIVO:
O mesmo exercício anterior, mas com unificação do evento para os 3 elementos
e sem propagação.
*/

let elementos = document.querySelectorAll("section, article, div")
elementos.forEach((e) => {
    e.addEventListener('click', (event) => {
        event.stopPropagation()
        console.log(event.target.tagName)    
    })
})