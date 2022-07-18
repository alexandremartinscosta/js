console.log('Funcionando.');

// O forEach() é uma forma muito comum de fazer uma iteração
// por uma array, no entanto a mesma operação pode ser 
// realizada com o o [].map(). A diferença é que o forEach()
// retorna undefined, e o [].map() retorna uma array.
// Por exemplo, com a array abaixo:

const amigos = ['Felipe', 'Paola', 'Tiago', 'Ana'];
console.log(amigos);

// O forEach() executa a iteração, porém o valor retornado
// é sempre undefined.

const novaLista1 = amigos.forEach((item, index) => {
  console.log(`Meu amigo ${index} se chama ${item}`);
});
console.log(novaLista1);


// O [].map() é útil para criar uma nova lista baseada na anterior
// por isso é comum usá-lo com um return que fica guardado
// dentro de uma variável:

const novaLista2 = amigos.map((item) => {
  return item.toUpperCase();
});
console.log(novaLista2);

// Num exemplo prático, se fosse preciso adicionar uma classe
// css a todos os itens de uma array, o forEach() serve
// perfeitamente, pois não precisamos retornar uma nova
// array, mas apenas executar a iteração. No entanto, sempre
// que uma nova array precisar ser retornada, deve-se usar
// o [].map()

// Para somar os valores de uma array, usa-se o [].reduce()
const numbers = [1, 2, 3, 4, 5];

const soma = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(soma);

// O [].reduce() também pode ser usado para retornar um objeto ou um array:
const amigos2 = [
  {
    nome: 'Felipe',
    sexo: 'masculino',
    idade: 30
  },
  {
    nome: 'Tiago',
    sexo: 'masculino',
    idade: 29
  },
  {
    nome: 'Paola',
    sexo: 'feminino',
    idade: 27
  },
  {
    nome: 'Ana',
    sexo: 'feminino',
    idade: 26
  },
]

console.log(amigos2);

const nomeAmigos = amigos2.reduce((acc, cur, idx) => {
  acc[idx] = cur.nome;
  return acc;
}, []); // As chaves ou colchetes ao final da expressão 
        // determinam o tipo do retorno

console.log(nomeAmigos);

// Uma tarefa muito comom é fazer iteração em uma array de objetos:
const compras = [
    {
      item: 'Banana',
      preco: 'R$ 4,99'
    },
    {
      item: 'Ovo',
      preco: 'R$ 2,99'
    },
    {
      item: 'Carne',
      preco: 'R$ 25,49'
    },
    {
      item: 'Refrigerante',
      preco: 'R$ 5,35'
    },
    {
      item: 'Quejo',
      preco: 'R$ 10,60'
    },
    {
      item: 'Arroz',
      preco: 'R$ 5,50'
    }
  ];

// Para retornar uma propriedade específica do objeto
// em uma nova array, use o [].map()  
const gastos = compras.map((item) => +item.preco.slice(3).replace(',','.'));

// Para somar os valores de cada item da array
// use o [].reduce()
const gastosTotal = gastos.reduce((a, b) => a + b);

console.log(gastosTotal);