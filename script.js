function setupGameBoard() {
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', function() {
    });
}
}


document.addEventListener('DOMContentLoaded', () => {
    const quadro = document.querySelector("quadro");
    const celulas = [];

    let currentPlayer = 'X';
    let isGameOver = false;

    for (let i = 0; i < 9; i++) {
      const celula = document.createElement("div");
      celula.listaDeClasse.add("celula");
      celulas.push(celula);
      quadro.appendChild(celula);

      celula.addEventListener('click', () => {
        if (isGameOver || celula.textContent !== '') return;

        celula.textContent = jogadoratual;
        celula.style.color = jogadoratual === 'X' ? 'red' : 'blue';

        if (VerificarEmpate()) {
          isGameOver = true;
          alert('Empate!');
          return;
        }

       jogadoratual = jogadoratual === 'X' ? 'O' : 'X';
      });
    }

   
    function verificarCombinacao () {
      const verificacaoDeVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], 
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], 
      ];

      for (const combination of verificacaoDeVitoria) {
        const [a, b, c] = combination;

        if (
          celulas[a].textContent === jogadoratual &&
          celulas[b].textContent === jogadoratual &&
          celulas[c].textContent === jogadoratual 
        ) {
          celulas[a].style.backgroundColor = 'lightgreen';
          celulas[b].style.backgroundColor = 'lightgreen';
          celulas[c].style.backgroundColor = 'lightgreen';
          return true;
        }
      }

      return false;
    }

    function verificarEmpate () {
      return [...celulas].every(celula => celulas.textContent !== '');
    }
  });





