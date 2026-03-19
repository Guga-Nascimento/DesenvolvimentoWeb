const campoNota = document.getElementById("nota");
const botaoVerificar = document.getElementById("btnVerificar");
const resultado = document.getElementById("resultado");

botaoVerificar.addEventListener("click", function () {
    const nota = Number(campoNota.value);

    switch (nota) {
        case 1:
            resultado.textContent = "Resultado: mau";
            break;
        case 2:
            resultado.textContent = "Resultado: insuficiente";
            break;
        case 3:
            resultado.textContent = "Resultado: positivo";
            break;
        case 4:
            resultado.textContent = "Resultado: bom";
            break;
        case 5:
            resultado.textContent = "Resultado: excelente";
            break;
        default:
            resultado.textContent = "Digite uma nota válida entre 1 e 5.";
            break;
    }
});