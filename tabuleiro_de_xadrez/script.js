function xadrez() {
  // Cria uma tabela com o elemento <table>
  const tabuleiro = document.createElement('table');
  tabuleiro.setAttribute('cellspacing', '0');
  tabuleiro.setAttribute('width', '270px');

  // Faz um loop para criar 8 tr's
  for (let i = 0; i < 8; i++) {
      const tr = document.createElement('tr');
      // Faz outro loop para criar 8 td's em cada tr
      for (let j = 0; j < 8; j++) {
          const td = document.createElement('td');
          // Se a soma das coordenadas da td for par, então
          // a cor da td é branca. Do contrário, é preta
          if ((i + j) % 2 == 0) {
              td.setAttribute('class', 'cell whitecell');
              tr.appendChild(td);
          } else {
              td.setAttribute('class', 'cell blackcell');
              tr.appendChild(td);
          }
      }
      tabuleiro.appendChild(tr);
  }
  document.body.appendChild(tabuleiro);
}

xadrez();