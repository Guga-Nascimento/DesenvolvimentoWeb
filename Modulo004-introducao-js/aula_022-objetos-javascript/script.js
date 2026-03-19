// ======================================================
// OBJETOS EM JAVASCRIPT
// ESTUDO GUIADO E COMENTADO
// ======================================================
//
// Como usar:
// 1) Salve este arquivo como script.js
// 2) Abra a página no navegador
// 3) Pressione F12
// 4) Vá até a aba "Console"
// 5) Veja a saída de cada exemplo
//
// ======================================================

// ------------------------------------------------------
// FUNÇÕES AUXILIARES
// Servem só para organizar melhor a saída no console
// ------------------------------------------------------
console.clear();

function linha() {
    console.log("=".repeat(70));
}

function titulo(texto) {
    linha();
    console.log(texto.toUpperCase());
    linha();
}

// ======================================================
// 1) O QUE É UM OBJETO
// ======================================================
//
// Objeto é uma estrutura que agrupa dados relacionados.
// Ele guarda informações em pares:
// chave: valor
//
// Exemplo:
// nome: "João"
// idade: 48
//
// Também pode guardar funções, chamadas de métodos.
// ======================================================

titulo("1) Criando um objeto");

const pessoa = {
    // ------------------------------------------
    // PROPRIEDADES
    // São características do objeto
    // ------------------------------------------
    nome: "João",
    apelido: "Ribeiro",
    idade: 48,
    genero: "masculino",

    // ------------------------------------------
    // MÉTODOS
    // São funções guardadas dentro do objeto
    //
    // IMPORTANTE:
    // Aqui usamos function tradicional porque
    // vamos usar "this".
    //
    // "this" significa:
    // "este próprio objeto"
    // ------------------------------------------
    apresentarNome: function () {
        return this.nome + " " + this.apelido;
    },

    apresentarIdade: function () {
        return this.idade + " anos de idade";
    },

    // ------------------------------------------
    // ARRAYS DENTRO DE OBJETOS
    // Um objeto também pode guardar listas
    // ------------------------------------------
    hobbies: ["Programação", "Cinema", "Música"],

    // ------------------------------------------
    // OBJETO DENTRO DE OBJETO
    // Isso também é muito comum
    // ------------------------------------------
    endereco: {
        cidade: "Ribeirão Preto",
        estado: "SP"
    }
};

console.log("Objeto completo:");
console.log(pessoa);

console.log("\nVisualização em tabela:");
console.table(pessoa);

// ======================================================
// 2) ACESSANDO DADOS DO OBJETO
// ======================================================
//
// Existem duas formas principais:
//
// 1. Notação de ponto
//    pessoa.nome
//
// 2. Notação de colchetes
//    pessoa["nome"]
//
// A notação com colchetes é útil quando:
// - a propriedade vem de uma variável
// - o nome da chave tem espaço ou caractere especial
// ======================================================

titulo("2) Acessando propriedades do objeto");

console.log("Usando ponto:");
console.log(pessoa.nome);
console.log(pessoa.idade);

console.log("\nUsando colchetes:");
console.log(pessoa["genero"]);
console.log(pessoa["apelido"]);

const propriedade = "nome";
console.log("\nUsando variável com colchetes:");
console.log(pessoa[propriedade]);

console.log("\nAcessando array dentro do objeto:");
console.log("Primeiro hobby:", pessoa.hobbies[0]);
console.log("Segundo hobby:", pessoa.hobbies[1]);

console.log("\nAcessando objeto dentro de objeto:");
console.log("Cidade:", pessoa.endereco.cidade);
console.log("Estado:", pessoa.endereco.estado);

// ======================================================
// 3) CHAMANDO MÉTODOS DO OBJETO
// ======================================================
//
// Método é uma função dentro do objeto.
//
// Para executar um método, usamos:
// objeto.metodo()
//
// Exemplo:
// pessoa.apresentarNome()
//
// Repare nos parênteses.
// Sem parênteses, você está apenas acessando a função.
// Com parênteses, você executa a função.
// ======================================================

titulo("3) Chamando métodos do objeto");

console.log("Nome completo:", pessoa.apresentarNome());
console.log("Idade formatada:", pessoa.apresentarIdade());

// ======================================================
// 4) ENTENDENDO O THIS
// ======================================================
//
// "this" dentro do método aponta para o próprio objeto.
//
// Neste caso:
// this.nome  -> pessoa.nome
// this.idade -> pessoa.idade
//
// Ou seja, o método pega os dados do próprio objeto.
// ======================================================

titulo("4) Entendendo o this");

console.log("this.nome dentro do objeto pessoa representa:", pessoa.nome);
console.log("this.apelido dentro do objeto pessoa representa:", pessoa.apelido);
console.log("Resultado final do método:", pessoa.apresentarNome());

// ======================================================
// 5) PERCORRENDO AS PROPRIEDADES COM FOR...IN
// ======================================================
//
// for...in percorre as chaves do objeto.
//
// Em cada volta do laço, a variável "propriedade"
// recebe o nome de uma chave do objeto.
//
// Depois usamos:
// pessoa[propriedade]
//
// para acessar o valor correspondente.
// ======================================================

titulo("5) Percorrendo o objeto com for...in");

for (let propriedade in pessoa) {
    console.log("Chave:", propriedade);
    console.log("Valor:", pessoa[propriedade]);
    console.log("---");
}

// ======================================================
// 6) OBJECT.KEYS, OBJECT.VALUES E OBJECT.ENTRIES
// ======================================================
//
// São formas muito úteis de inspecionar objetos.
//
// Object.keys(objeto)    -> retorna as chaves
// Object.values(objeto)  -> retorna os valores
// Object.entries(objeto) -> retorna chave + valor
// ======================================================

titulo("6) Object.keys, Object.values e Object.entries");

console.log("Chaves do objeto:");
console.log(Object.keys(pessoa));

console.log("\nValores do objeto:");
console.log(Object.values(pessoa));

console.log("\nEntradas do objeto:");
console.log(Object.entries(pessoa));

// ======================================================
// 7) ADICIONANDO NOVAS PROPRIEDADES
// ======================================================
//
// Podemos adicionar novas propriedades depois que o
// objeto já foi criado.
//
// Exemplo:
// pessoa.email = "..."
// pessoa["telefone"] = "..."
//
// ======================================================

titulo("7) Adicionando propriedades");

pessoa.email = "joao.ribeiro@gmail.com";
pessoa["telefone"] = "(16) 99999-9999";

console.log("Objeto após adicionar email e telefone:");
console.table(pessoa);

// ======================================================
// 8) ALTERANDO VALORES EXISTENTES
// ======================================================
//
// Basta acessar a propriedade e atribuir um novo valor.
// ======================================================

titulo("8) Alterando propriedades");

pessoa.idade = 49;
pessoa.nome = "João Pedro";

console.log("Objeto após alterações:");
console.table(pessoa);

// ======================================================
// 9) REMOVENDO PROPRIEDADES
// ======================================================
//
// Usamos o operador delete.
//
// Exemplo:
// delete pessoa.genero
//
// Depois disso, a propriedade deixa de existir.
// ======================================================

titulo("9) Removendo propriedades");

delete pessoa.genero;

console.log("Objeto após remover 'genero':");
console.table(pessoa);

console.log("Tentando acessar pessoa.genero:");
console.log(pessoa.genero); // undefined

// ======================================================
// 10) OBJETOS SÃO COPIADOS POR REFERÊNCIA
// ======================================================
//
// ESTE É UM DOS PONTOS MAIS IMPORTANTES.
//
// Quando fazemos:
//
// const novoObjeto = objetoOriginal
//
// não criamos um novo objeto.
// Criamos apenas outra referência para o mesmo objeto.
//
// Resultado:
// mexeu em um -> mexeu no outro
// ======================================================

titulo("10) Valor x referência");

const transporte = {
    tipo: "automóvel",
    ano: 2032,
    marca: "Audi"
};

const novoTransporte = transporte;

// Alterando pela nova variável
novoTransporte.marca = "Mercedes";

console.log("Objeto original:");
console.table(transporte);

console.log("Nova variável apontando para o mesmo objeto:");
console.table(novoTransporte);

console.log(
    "\nConclusão: os dois mostram 'Mercedes' porque apontam para o mesmo objeto."
);

// ======================================================
// 11) COPIANDO OBJETO COM OBJECT.ASSIGN
// ======================================================
//
// Object.assign({}, objeto)
//
// Isso cria um novo objeto raso com base no original.
// ======================================================

titulo("11) Cópia com Object.assign");

const transporteFinal = Object.assign({}, transporte);
transporteFinal.marca = "Nissan";

console.log("Objeto original:");
console.table(transporte);

console.log("Cópia alterada:");
console.table(transporteFinal);

// ======================================================
// 12) COPIANDO OBJETO COM SPREAD OPERATOR
// ======================================================
//
// Spread operator:
// { ...objeto }
//
// Também cria uma cópia rasa.
// ======================================================

titulo("12) Cópia com spread operator");

const transporte2 = { ...transporte };
transporte2.marca = "Tesla";

console.log("Objeto original:");
console.table(transporte);

console.log("Nova cópia com spread:");
console.table(transporte2);

// ======================================================
// 13) ATENÇÃO: OBJECT.ASSIGN E SPREAD FAZEM CÓPIA RASA
// ======================================================
//
// "Cópia rasa" significa:
// o primeiro nível é copiado,
// mas objetos internos continuam compartilhados.
//
// Exemplo:
// se houver objeto dentro de objeto,
// a parte interna ainda pode continuar ligada.
// ======================================================

titulo("13) Atenção: cópia rasa");

const usuarioOriginal = {
    nome: "Carlos",
    endereco: {
        cidade: "Ribeirão Preto",
        estado: "SP"
    }
};

const usuarioCopia = { ...usuarioOriginal };

// Alterando objeto interno da cópia
usuarioCopia.endereco.cidade = "Sertãozinho";

console.log("Objeto original:");
console.log(usuarioOriginal);

console.log("\nObjeto cópia:");
console.log(usuarioCopia);

console.log(
    "\nPerceba: a cidade mudou nos dois, porque o objeto interno ainda é compartilhado."
);

// ======================================================
// 14) RESUMO FINAL
// ======================================================

titulo("14) Resumo final");

console.log("1. Objeto agrupa dados em chave: valor.");
console.log("2. Propriedade = dado.");
console.log("3. Método = função dentro do objeto.");
console.log("4. this = o próprio objeto atual.");
console.log("5. ponto e colchetes acessam propriedades.");
console.log("6. for...in percorre as chaves.");
console.log("7. delete remove propriedade.");
console.log("8. objetos são passados por referência.");
console.log("9. Object.assign e spread fazem cópia rasa.");

linha();
console.log("Fim do estudo de objetos.");
linha();