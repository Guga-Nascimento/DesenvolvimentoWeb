/* 
OBJETIVO:
Adicionar 3 eventos click, um para cada elemento dentro do body 
cada um vai apresentar um texto único na consola
e fazer com que sejam independentes uns dos outros.
(Propagation)
*/

let section = document.querySelector('section')
let article = document.querySelector('article')
let div = document.querySelector('div')

/*section.addEventListener('click', (event) =>{
    console.log('section')
})

section.addEventListener('click', (event) =>{
    console.log('article')
})

section.addEventListener('click', (event) =>{
    console.log('div')
})*/

/*ao clicar na area da div dispara os 3 evento mas como conseguir fazer cada evento ficar individual.*/

section.addEventListener('click', (event) =>{
    event.stopPropagation()
    console.log('section')
})

article.addEventListener('click', (event) =>{
    event.stopPropagation()
    console.log('article')
})

div.addEventListener('click', (event) =>{
    event.stopPropagation()
    console.log('div')
})

/*colocando o event.stopPropagation fica individual os clicks*/

