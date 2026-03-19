
if(document.readyState === 'complete'){
    document.addEventListener('DOMContentLoaded', () => {
    
        document.querySelector("button").addEventListener('click', () => {
            document.querySelector('h1').innerText = "Texto do título alterado"
        })
    
    })
}

// o código seguinte é executado assim que o html estiver carregado,
// mesmo que as imagens não estejam ainda carregadas

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("button").addEventListener('click', () => {
        document.querySelector('h1').innerText = "Texto do título alterado"
    })
})


// mostrar ainda 
document.addEventListener('readystatechange', event => { 
    if (event.target.readyState === "interactive") {
        console.log('O documento tem os elementos carregados (semelhante ao DOMContentLoaded)')
    }

    if (event.target.readyState === "complete") {
        console.log('A página está completamente carregada')
    }
});