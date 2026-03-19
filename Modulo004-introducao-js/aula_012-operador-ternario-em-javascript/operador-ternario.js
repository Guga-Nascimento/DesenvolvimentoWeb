// =======================================
// OPERADOR TERNÁRIO
// =======================================
//
// Sintaxe:
// condição ? valor_se_verdadeiro : valor_se_falso
//
// O operador ternário é uma forma curta de escrever
// uma decisão simples no lugar de um if/else.
// =======================================


// EXEMPLO 1 - Enviar e-mail
let enviarEmail = true;

let mensagemEmail = enviarEmail ? "Enviar e-mail" : "Não enviar e-mail";

console.log("Exemplo 1:", mensagemEmail);


// EXEMPLO 2 - Verificar se um valor é menor que 5
let numero = 10;

let resultadoNumero = numero < 5 ? "SIM" : "NÃO";

console.log("Exemplo 2:", resultadoNumero);


// EXEMPLO 3 - Mostrar resultado diretamente no console
let valorTeste = 100;

console.log(
    "Exemplo 3:",
    valorTeste === 10 ? "SIM" : "NÃO"
);


// EXEMPLO 4 - Duas condições ao mesmo tempo
let valor1 = 5;
let valor2 = 10;

let respostaFinal = (valor1 === 5 && valor2 === 10) ? "OK" : "NOT OK";

console.log("Exemplo 4:", respostaFinal);