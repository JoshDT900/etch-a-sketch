let gridBox = document.querySelector('.grid-container');

let gridBuilder = (userInput) => {
  for (let i = 0; i < (userInput * userInput); i++) {
    gridBox.appendChild(document.createElement('div')).setAttribute('class', 'gridBox');
  }

  gridBox.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
}

gridBuilder(80);