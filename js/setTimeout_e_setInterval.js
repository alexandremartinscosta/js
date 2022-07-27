// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function mudaBackground() {
  document.body.classList.toggle('ativo');
}

setInterval(mudaBackground, 2000);

// Crie um cronômetro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarCronometro);
pausar.addEventListener('click', pausarCronometro);
pausar.addEventListener('dblclick', resetarCronometro);

let i = 1;
let timer;

function iniciarCronometro() {
  timer = setInterval(() => {
    tempo.innerText = i++
  }, 1000)
  iniciar.setAttribute('disabled', '');
}

function pausarCronometro() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled', '');
}

function resetarCronometro() {
  tempo.innerText = 0;
  i = 1;
}