let gridBox = document.querySelector('.grid-container');
let userInput = 16;
let boxArr = [];
let colorChoice = "red";

let gridBuilder = (userInput) => {
  for (let i = 0; i < (userInput * userInput); i++) {
    gridBox.appendChild(document.createElement('div')).setAttribute('class', `gridBox${i}`);
  }

  return gridBox.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
}

gridBuilder(userInput);

for (let i = 0; i < (userInput * userInput); i++) {
  boxArr.push(document.querySelector(`.gridBox${i}`))
}

let changeColor = (e) => {  
  e.target.style = `background-color: ${colorChoice}`;
}

boxArr.forEach(box => box.addEventListener('mouseover', changeColor))

