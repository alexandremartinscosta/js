const pessoa = new Object({
    nome: 'Alexandre'
});

console.log(pessoa);

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
