document.addEventListener('DOMContentLoaded', function () {
  const words = ['amor', 'carinho', 'saudade'];
  let foundWords = [];
  let allWordsFound = false;

  const puzzle = [
      ['s', 't', 'd', 'n', 'c', 'i', 'o', 'a', 'r', 'i', 'b', 'a', 'c', 'i', 'd', 'o', 'r', 'a', 'h', 'n'],
      ['c', 'i', 'd', 'b', 'a', 'c', 'i', 'm', 't', 'a', 'n', 'c', 'i', 'a', 'r', 'o', 'r', 'a', 'h', 'n'],
      ['v', 'i', 'i', 'j', 't', 'r', 'x', 'o', 'w', 'y', 'd', 's', 'z', 'p', 'k', 'f', 'o', 'b', 'q', 'a'],
      ['d', 'y', 's', 'c', 'o', 'i', 'f', 'r', 'z', 's', 'h', 'j', 'v', 'x', 'g', 'r', 'n', 'e', 'k', 'b'],
      ['n', 'o', 't', 'e', 'b', 'v', 'i', 's', 'e', 'd', 'j', 'o', 'm', 's', 'a', 'u', 'd', 'a', 'e', 'k'],
      ['e', 'n', 'a', 'k', 'a', 'e', 'j', 'v', 'd', 'e', 's', 'b', 'n', 'c', 'a', 'r', 'i', 'n', 'h', 'o'], //carinho
      ['s', 'i', 'n', 'n', 'c', 'i', 'o', 'a', 'r', 'i', 'b', 'a', 'c', 'i', 'd', 'o', 'r', 'a', 'h', 'n'],
      ['d', 'a', 't', 'a', 'b', 'c', 'i', 'a', 'r', 'd', 'i', 's', 't', 'a', 'n', 'c', 'o', 'h', 'n', 'o'],
      ['i', 'a', 't', 'a', 'b', 'c', 'i', 'a', 'r', 'd', 'i', 's', 't', 'a', 'n', 'c', 'o', 'h', 'n', 'o'],
      ['c', 'a', 's', 's', 'p', 's', 'a', 'u', 'd', 'a', 'd', 'e', 'b', 'x', 'g', 'n', 'y', 'e', 'z', 'o']
  ];

  function createPuzzleTable() {
      const table = document.createElement('table');

      for (let i = 0; i < puzzle.length; i++) {
          const row = document.createElement('tr');
          for (let j = 0; j < puzzle[i].length; j++) {
              const cell = document.createElement('td');
              cell.textContent = puzzle[i][j];
              cell.dataset.row = i;
              cell.dataset.col = j;
              row.appendChild(cell);
          }
          table.appendChild(row);
      }

      document.getElementById('game-container').appendChild(table);

      table.addEventListener('click', handleClick);
  }

  document.getElementById('checkWordBtn').addEventListener('click', checkWords);

  function handleClick(event) {
      const clickedCell = event.target;

      if (clickedCell.tagName === 'TD' && clickedCell.textContent.trim() !== '') {
          clickedCell.classList.toggle('selected');
      }
  }

  function checkWords() {
      if (allWordsFound) {
          return;
      }

      const inputWord = document.getElementById('wordInput').value.toLowerCase();
      const foundWordIndex = foundWords.indexOf(inputWord);

      if (words.includes(inputWord) && foundWordIndex === -1) {
          foundWords.push(inputWord);
          updateFoundWordsList();

          if (foundWords.length === words.length) {
              allWordsFound = true;
              showCongratulationsMessage();
          }
      } else {
          displayMessage('Palavra incorreta. Tente novamente.');
      }

      document.getElementById('wordInput').value = '';
  }

  function showCongratulationsMessage() {
    const congratulationsMessage = document.getElementById('congratulations-message');
    const foundWordsElement = document.getElementById('found-words');

    if (foundWords.length === words.length) {
        congratulationsMessage.innerHTML = `
        <p> 
        Meu Amor,
        </p>
        <p class="line anim-typewriter" style="font-size: 16px; color: #ff66b2;">
        Hoje comemoramos dois meses de um capítulo que, para mim, é a história mais bela já escrita. <br> 
        A cada dia ao seu lado, um novo parágrafo se desenha, repleto de 
            <span style="color: #ff66b2; font-weight: bold;">amor</span>, 
            <span style="color: #ff66b2; font-weight: bold;">carinho</span>,  e 
            <span style="color: #ff66b2; font-weight: bold;">saudade</span>,  aquecendo meu coração.
        </p>

        <button id="redirectButton" class="styled-button">>>></button>
        `;

        congratulationsMessage.style.display = 'block';
        foundWordsElement.style.display = 'none'; // Opcional: Esconde a lista de palavras encontradas

        // Adiciona um event listener ao botão
        const redirectButton = document.getElementById('redirectButton');
        redirectButton.addEventListener('click', redirectToAnotherFile);
    }
}

function redirectToAnotherFile() {
    // Substitua 'caminho/para/seu/arquivo.html' pelo caminho real para o seu arquivo de destino
    window.location.href = 'index2.html';
}




  function displayMessage(message) {
      const messageContainer = document.getElementById('message');
      messageContainer.textContent = message;
  }

  function updateFoundWordsList() {
      const foundWordsElement = document.getElementById('found-words');
      foundWordsElement.textContent = foundWords.join(', ');
  }

  createPuzzleTable();
});

// inicio.html
document.getElementById("iniciarBtn").addEventListener("click", function() {
    window.location.href = "index2.html";
});
