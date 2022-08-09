class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  empinar() {
    console.log('Moto empinou com ' + this.rodas + ' rodas');
  }
  acelerar() {
    super.acelerar();
    console.log('Acelerou rápido');
  }

}

const honda = new Moto(2);