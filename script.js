let gridBox = document.querySelector('.grid-container');
let userInput = parseInt(prompt("Enter a number"));
let boxArr = [];
let colorChoice = "red";

if (userInput > 100 || userInput < 8) {
    userInput = 16;
    alert("Number too large or too small. Please select a number between 8 and 100.")
  }

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

