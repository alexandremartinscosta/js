
// Seria possível criar uma função com o construtor Function()
// mas essa forma nunca será utilizada
const construtor = new Function('frase', 'return console.log(frase)');

// Os principais métodos de função são o prototype.call, prototype.apply
// e o prototype.bind
 


function Dom(seletor) {
    this.element = document.querySelector(seletor);
}

const ul = new Dom('ul');
console.log(ul)
console.log(ul.element);
console.log(ul.element.isConnected)


// É possível modificar o construtor nativo adicionando 
// novos métodos, porém isso não é uma boa prática
const consoles = ['Super Nintendo', 'Mega Drive', 'PlayStation 1'];

Array.prototype.mostrarThis = function() {
    console.log(this);
}

consoles.mostrarThis();

// Para transformar uma NodeList em Array:
const li = document.querySelectorAll('li');

const array = Array.prototype.filter.call(li, () => {
    return true;
});

const array2 = Array.from(li);

const filtro = Array.prototype.filter.call(li, (item) => {
    return item.classList.contains('ativo');
});

console.log(li);
console.log(array);
console.log(array2);
console.log(filtro);

// Exercício funções
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acc, cur) => {
    return acc + cur.innerText.length;
}, 0);

console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteúdo

// function retornaElementos(tag, classe, conteudo) {
//     console.log(`<${tag} class="${classe}">${conteudo}</${tag}>`);
// };
// retornaElementos('div', 'principal', 'Conteúdo da div.');


function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
};

console.log(criarElemento('li', 'principal', 'Conteúdo.'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

console.log(h1Titulo('Curso de JavaScript'));

// function h1Titulo(conteudo) {
//     console.log(`<h1 class="titulo">${conteudo}</h1>`);
// };

// h1Titulo('Novo título.');