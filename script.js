let gridBox = document.querySelector('.grid-container');

let gridElements = document.createElement('div');
gridElements.setAttribute('class', 'gridBox');


let gridBuilder = (userInput) => {
  for (let i = 0; i < (userInput * userInput); i++) {
    gridBox.appendChild(document.createElement('div')).setAttribute('class', 'gridBox');
  }

  gridBox.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
}

gridBuilder(50);