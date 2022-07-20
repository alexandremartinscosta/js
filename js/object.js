const jogos = [
    "Zelda: Breath of the Wild",
    "Zelda: Ocarina of Time",
    "Zelda: Majora's Mask"
];

const li = document.querySelectorAll('li');

const pessoa = new Object({
    nome: 'Alexandre'
});

// console.log(pessoa);

// Para definir propriedades de um objeto de forma imutável,
// usar o Object.defineProperties()
const zelda = {};

Object.defineProperties(zelda, {
    criador: {
        value: 'Shigeru Miyamoto',
        configurable: false, // Impede que a propriedade seja deletada
        writable: true, // Permite alterar o valor da propriedade
    }
});

console.log(zelda);
console.log("teste");

console.log(Object.getOwnPropertyDescriptors(Array.prototype));
console.log(Object.getOwnPropertyDescriptors(window, 'innerHeight'));

// Para retornar todas as chaves de um objeto
console.log(Object.keys(zelda));

// Para identificar qual o tipo de um objeto
const tipoZelda = Object.prototype.toString.call(zelda);
const tipoJogos = Object.prototype.toString.call(jogos);
const tipoLi = Object.prototype.toString.call(li);

console.log(tipoZelda);
console.log(tipoJogos);
console.log(tipoLi);

// Perceba que o typeof não funciona da mesma forma,
// pois para ele tudo é objeto
console.log(typeof(zelda));
console.log(typeof(jogos));
console.log(typeof(li));

// Exercício objetos
// Crie uma função que verifique
// corretamente o tipo de dado

function verificaDado(dado) {
    return Object.prototype.toString.call(dado);
};

const verificaJogos = verificaDado(jogos);
const verificaZelda = verificaDado(zelda);
const verificaLi = verificaDado(li);

console.log(verificaJogos);
console.log(verificaZelda);
console.log(verificaLi);

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};

Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: true,
        // configurable: true,
        // writable: true
    }
});

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
};

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
const propriedadesString = Object.getOwnPropertyNames(String.prototype);
const propriedadesArray = Object.getOwnPropertyNames(Array.prototype);

console.log(propriedadesString);
console.log(propriedadesArray);