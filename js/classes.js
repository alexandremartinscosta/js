// A "classe" em js é apenas uma nova sintaxe para
// criar uma função construtora

class Button {
  // Primeiro se declara o método especial "constructor"
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  // Em seguida se declaram os demais métodos
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
  // Por padrão, os métodos de uma classe são todos criados no protótipo.
  // Para criar um método que seja da própria classe, se usa a palavra
  // especial "static"
  static botaoAzul(text) {
    return new Button(text, 'blue');
  }
}

const blueButton = new Button('Comprar', 'blue');
blueButton.appendTo('body');
console.log(blueButton);

const ba = Button.botaoAzul('Clicar aqui');
console.log(ba);

// Outra forma de fazer seria assim
class Botao {
  constructor(options) {
    this.options = options;
  }
}

const botaoVerde = new Botao({
  backgroundColor: 'green',
  text: 'Clique',
  color: 'red',
});