let gridBox = document.querySelector('.grid-container');
let resizeBtn = document.querySelector('.resizeGridBtn')
let userInput = 40; //parseInt(prompt("Set grid area between 8 and 100: "));
let boxArr = [];
let colorChoice = "red";

// Handles removal and re-addition of grid boxes based on user input
let userPrompt = () => {
  userInput = parseInt(prompt("Set grid area between 8 and 100: "));

  if (userInput > 100 || userInput < 8 || userInput!= 'number') {
    userInput = 16;
    alert("Number too large or too small. Please select a number between 8 and 100. Setting to 16.")
  }

  boxArr.forEach(box => box.remove());

  gridBuilder(userInput);

  for (let i = 0; i < (userInput * userInput); i++) {
    boxArr.push(document.querySelector(`.gridBox${i}`))
  }

  boxArr.forEach(box => box.addEventListener('mouseover', changeColor))
}

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


// Sets background color for each hovered grid box.
let changeColor = (e) => {  
  e.target.style = `background-color: ${colorChoice}`;
}

resizeBtn.addEventListener('click', userPrompt)
boxArr.forEach(box => box.addEventListener('mouseover', changeColor))

